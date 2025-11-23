import axios from 'axios';
import type { AxiosResponse, Method, AxiosError } from 'axios';

const STATUS_CODES = {
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
} as const;

const MESSAGES = {
  NOT_FOUND: 'Route Not Found!',
  UNAUTHORIZED: '401 Unauthorized!',
  FORBIDDEN: "You don't have permission to access this resource!",
} as const;

interface ApiResponse<T = unknown> {
  code?: number;
  message?: string;
  data?: T;
  [key: string]: unknown;
}

export function getLocalAccessToken(): string | null {
  return localStorage.getItem('access_token');
}

export const config = {
  base_server: import.meta.env.VITE_API_GATEWAY_URL as string,
  version: 1,
};

// ✅ Normal function instead of a hook
export async function request<T = unknown>(
  url: string,
  method: Method,
  param?: T
): Promise<ApiResponse | false> {
  const headers: Record<string, string> = {
    'Content-Type': param instanceof FormData
      ? 'multipart/form-data'
      : 'application/json',
    accept: param instanceof FormData ? 'application/json' : '*/*',
    'correlation_id': self.crypto.randomUUID(),
    Authorization: `Bearer ${getLocalAccessToken()}`,
  };

  try {
    const response: AxiosResponse<ApiResponse> = await axios({
      url: `${config.base_server}${url}`,
      method,
      data: param,
      headers,
      timeout: 10000,
    });

    if (response.data.code === 400 || response.data.code === 503) {
      console.log(response.data.message || 'Request failed');
      return false;
    }
    return response.data;

  } catch (err: unknown) {
    const axiosErr = err as AxiosError;
    const status = axiosErr.response?.status;
    const message = axiosErr.message;
    if (axiosErr.code === 'ECONNABORTED') {
      console.log('Request timed out.');
    } else {
      switch (status) {
      case STATUS_CODES.NOT_FOUND:
        console.log(MESSAGES.NOT_FOUND);
        break;
      case STATUS_CODES.INTERNAL_SERVER_ERROR:
        console.log('Server error:', message);
        break;
      case STATUS_CODES.UNAUTHORIZED:
        console.log(MESSAGES.UNAUTHORIZED);
        break;
      case STATUS_CODES.FORBIDDEN:
        console.log(MESSAGES.FORBIDDEN);
        break;
      default:
        console.log('Error:', message);
      }
    }
    return false;

  } finally {
    console.log('Request completed');
  }
}
