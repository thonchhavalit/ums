import type { FilterConfig } from '../components/Filter';

// Student page filter configuration
export const studentFilterConfig: FilterConfig = {
  title: 'Filtering',
  enableSearch: true,
  searchPlaceholder: 'Search students...',
  buttonText: 'Search',
  enableViewToggle: false,
  filters: [
    {
      key: 'major',
      label: 'Major',
      type: 'select',
      placeholder: 'Select Major',
      allowClear: true,
      options: [
        { value: 'IT', label: 'IT' },
        { value: 'Law', label: 'Law' },
        { value: 'Business', label: 'Business' },
        { value: 'Chemistry', label: 'Chemistry' },
      ],
    },
    {
      key: 'status',
      label: 'Status',
      type: 'select',
      placeholder: 'Select Status',
      allowClear: true,
      options: [
        { value: 'Active', label: 'Active' },
        { value: 'In-Active', label: 'In-Active' },
        { value: 'Suspend', label: 'Suspend' },
      ],
    },
  ],
};

// Department page filter configuration
export const departmentFilterConfig: FilterConfig = {
  title: 'Department Filtering',
  enableSearch: true,
  searchPlaceholder: 'Search departments...',
  buttonText: 'Filter',
  enableViewToggle: true,
  filters: [
    {
      key: 'student',
      label: 'Student',
      type: 'select',
      placeholder: 'Select Student',
      allowClear: true,
      options: [
        { value: 'john_doe', label: 'John Doe' },
        { value: 'jane_smith', label: 'Jane Smith' },
        { value: 'mike_wilson', label: 'Mike Wilson' },
      ],
    },
    {
      key: 'year',
      label: 'Academic Year',
      type: 'select',
      placeholder: 'Select Year',
      allowClear: true,
      options: [
        { value: '2024', label: '2024' },
        { value: '2023', label: '2023' },
        { value: '2022', label: '2022' },
        { value: '2021', label: '2021' },
      ],
    },
    {
      key: 'faculty',
      label: 'Faculty',
      type: 'select',
      placeholder: 'Select Faculty',
      allowClear: true,
      options: [
        { value: 'engineering', label: 'Engineering' },
        { value: 'science', label: 'Science' },
        { value: 'arts', label: 'Arts' },
        { value: 'business', label: 'Business' },
      ],
    },
  ],
};

// Course page filter configuration
export const courseFilterConfig: FilterConfig = {
  title: 'Course Filtering',
  enableSearch: true,
  searchPlaceholder: 'Search courses...',
  buttonText: 'Search',
  enableViewToggle: false,
  filters: [
    {
      key: 'department',
      label: 'Department',
      type: 'select',
      placeholder: 'Select Department',
      allowClear: true,
      options: [
        { value: 'computer_science', label: 'Computer Science' },
        { value: 'mathematics', label: 'Mathematics' },
        { value: 'physics', label: 'Physics' },
        { value: 'chemistry', label: 'Chemistry' },
      ],
    },
    {
      key: 'level',
      label: 'Course Level',
      type: 'select',
      placeholder: 'Select Level',
      allowClear: true,
      options: [
        { value: 'beginner', label: 'Beginner' },
        { value: 'intermediate', label: 'Intermediate' },
        { value: 'advanced', label: 'Advanced' },
      ],
    },
    {
      key: 'semester',
      label: 'Semester',
      type: 'select',
      placeholder: 'Select Semester',
      allowClear: true,
      options: [
        { value: '1', label: 'Semester 1' },
        { value: '2', label: 'Semester 2' },
        { value: '3', label: 'Semester 3' },
        { value: '4', label: 'Semester 4' },
      ],
    },
  ],
};

// Financial page filter configuration
export const financialFilterConfig: FilterConfig = {
  title: 'Financial Filtering',
  enableSearch: true,
  searchPlaceholder: 'Search transactions...',
  buttonText: 'Filter',
  enableViewToggle: false,
  filters: [
    {
      key: 'type',
      label: 'Transaction Type',
      type: 'select',
      placeholder: 'Select Type',
      allowClear: true,
      options: [
        { value: 'tuition', label: 'Tuition Fee' },
        { value: 'library', label: 'Library Fee' },
        { value: 'lab', label: 'Lab Fee' },
        { value: 'exam', label: 'Exam Fee' },
      ],
    },
    {
      key: 'status',
      label: 'Payment Status',
      type: 'select',
      placeholder: 'Select Status',
      allowClear: true,
      options: [
        { value: 'paid', label: 'Paid' },
        { value: 'pending', label: 'Pending' },
        { value: 'overdue', label: 'Overdue' },
        { value: 'cancelled', label: 'Cancelled' },
      ],
    },
  ],
};

// Faculty page filter configuration
export const facultyFilterConfig: FilterConfig = {
  title: 'Filtering',
  enableSearch: true,
  searchPlaceholder: 'Search any keyword...',
  buttonText: 'Search',
  enableViewToggle: false,
  filters: [
    {
      key: 'faculty',
      label: 'Faculty',
      type: 'select',
      placeholder: 'Select Faculty',
      allowClear: true,
      options: [
        { value: 'Faculty of Educational Sciences', label: 'Faculty of Educational Sciences' },
        { value: 'Faculty of Law and Governance', label: 'Faculty of Law and Governance' },
        { value: 'Faculty of Economics and Business Studies', label: 'Faculty of Economics and Business Studies' },
        { value: 'Faculty of Science and Digital Studies', label: 'Faculty of Science and Digital Studies' },
        { value: 'Faculty of Political Sciences and International Relations', label: 'Faculty of Political Sciences and International Relations' },
        { value: 'Faculty of Science', label: 'Faculty of Science' },
      ],
    },
    {
      key: 'year',
      label: 'Year',
      type: 'select',
      placeholder: 'Select Year',
      allowClear: true,
      options: [
        { value: '1999', label: '1999' },
        { value: '2000', label: '2000' },
        { value: '2002', label: '2002' },
        { value: '2007', label: '2007' },
        { value: '2009', label: '2009' },
        { value: '2024', label: '2024' },
      ],
    },
  ],
};