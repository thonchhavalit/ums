export type Student = {
  key: string;
  name: string;
  gender: string;
  studentId: string;
  dob: string;
  degree: string;
  address: string;
  phone: string;
  enrollDate: string;
  major: string;
  status: 'Active' | 'In-Active' | 'Suspend' | 'Master' | 'Doctoral' | string;
};

export const mockData: Student[] = [
  {
    key: '1',
    name: 'Phan Sopheak',
    gender: 'Male',
    studentId: '65210074',
    dob: '08/03/2004',
    degree: 'Bachelor',
    address: 'Phnom Penh',
    phone: '0974769798',
    enrollDate: '18/11/2025',
    major: 'IT',
    status: 'Active',
  },
  {
    key: '2',
    name: 'Heng Sovann',
    gender: 'Male',
    studentId: '65210075',
    dob: '08/03/2004',
    degree: 'Bachelor',
    address: 'Phnom Penh',
    phone: '0974769798',
    enrollDate: '18/11/2025',
    major: 'Law',
    status: 'Active',
  },
  {
    key: '3',
    name: 'Touch Chenda',
    gender: 'Female',
    studentId: '65210076',
    dob: '08/03/2004',
    degree: 'Bachelor',
    address: 'Phnom Penh',
    phone: '0974769798',
    enrollDate: '18/11/2025',
    major: 'Business',
    status: 'In-Active',
  },
  {
    key: '4',
    name: 'Lim Kimsan',
    gender: 'Male',
    studentId: '65210077',
    dob: '08/03/2004',
    degree: 'Associate',
    address: 'Phnom Penh',
    phone: '0974769798',
    enrollDate: '18/11/2025',
    major: 'Chemistry',
    status: 'Active',
  },
  {
    key: '5',
    name: 'Chhorn Vichea',
    gender: 'Male',
    studentId: '65210078',
    dob: '08/03/2004',
    degree: 'Associate',
    address: 'Phnom Penh',
    phone: '0974769798',
    enrollDate: '18/11/2025',
    major: 'Biology',
    status: 'In-Active',
  },
  {
    key: '6',
    name: 'Sann Vuth',
    gender: 'Female',
    studentId: '65210079',
    dob: '08/03/2004',
    degree: 'Master',
    address: 'Phnom Penh',
    phone: '0974769798',
    enrollDate: '18/11/2025',
    major: 'Mathematic',
    status: 'Suspend',
  },
  {
    key: '7',
    name: 'Roeun Channarong',
    gender: 'Male',
    studentId: '65210080',
    dob: '08/03/2004',
    degree: 'Doctoral',
    address: 'Phnom Penh',
    phone: '0974769798',
    enrollDate: '18/11/2025',
    major: 'IT',
    status: 'Active',
  },
];
