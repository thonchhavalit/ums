export interface Faculty {
  key: string;
  no: string;
  dean: string;
  facultyName: string;
  email: string;
  phoneNumber: string;
  student: number;
  year: number;
  departments: number;
  avatar?: string;
}

export const mockFacultyData: Faculty[] = [
  {
    key: '1',
    no: '01',
    dean: 'Thon Chhavalit',
    facultyName: 'Faculty of Educational Sciences',
    email: 'chhavalit@gmail.com',
    phoneNumber: '097476798',
    student: 130,
    year: 2007,
    departments: 10,
  },
  {
    key: '2',
    no: '02',
    dean: 'So Youngsinh',
    facultyName: 'Faculty of Law and Governance',
    email: 'chhavalit@gmail.com',
    phoneNumber: '097476798',
    student: 140,
    year: 1999,
    departments: 10,
  },
  {
    key: '3',
    no: '03',
    dean: 'Phort Sophea',
    facultyName: 'Faculty of Economics and Business Studies',
    email: 'chhavalit@gmail.com',
    phoneNumber: '097476798',
    student: 160,
    year: 2002,
    departments: 10,
  },
  {
    key: '4',
    no: '04',
    dean: 'Sophia Wilson',
    facultyName: 'Faculty of Science and Digital Studies',
    email: 'chhavalit@gmail.com',
    phoneNumber: '097476798',
    student: 100,
    year: 2007,
    departments: 10,
  },
  {
    key: '5',
    no: '05',
    dean: 'Sophia Wilson',
    facultyName: 'Faculty of Political Sciences and International Relations',
    email: 'chhavalit@gmail.com',
    phoneNumber: '097476798',
    student: 120,
    year: 2007,
    departments: 10,
  },
  {
    key: '6',
    no: '06',
    dean: 'Sophia Wilson',
    facultyName: 'Faculty of Science',
    email: 'chhavalit@gmail.com',
    phoneNumber: '097476798',
    student: 124,
    year: 2024,
    departments: 10,
  },
  {
    key: '7',
    no: '07',
    dean: 'Sophia Wilson',
    facultyName: 'Faculty of Science',
    email: 'chhavalit@gmail.com',
    phoneNumber: '097476798',
    student: 400,
    year: 2000,
    departments: 10,
  },
  {
    key: '8',
    no: '08',
    dean: 'Sophia Wilson',
    facultyName: 'Faculty of Science',
    email: 'chhavalit@gmail.com',
    phoneNumber: '097476798',
    student: 50,
    year: 2009,
    departments: 10,
  },
];