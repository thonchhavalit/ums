import { request } from './request';

import type { tuitionFeeCreate } from '@/types/tuitionFeeType';

export const getFeeList = () => {
  return request('/tuition-fee', 'GET');
}

export const createFee = (data: tuitionFeeCreate) => {
  return request('/tuition-fee', 'POST', data);
}

export const updateFee = (id: string, data: tuitionFeeCreate) => {
  return request(`/tuition-fee/${id}`, 'PUT', data);
}

export const deleteFee = (id: string) => {
  return request(`/tuition-fee/${id}`, 'DELETE');
}
