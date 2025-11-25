// Example showing how to use the dynamic DataPage component for different entities

import React from 'react';
import DataPage from '../components/DataPage';

// Student page example
import { mockData as studentData } from '../data/mockStudents';
import { studentFilterConfig } from '../config/filterConfigs';
import StudentTable from '../components/Table';

export const StudentPageExample: React.FC = () => {
  const handleStudentFilter = (filters: {
    major?: string;
    status?: string;
    keyword?: string;
  }, data: typeof studentData) => {
    const { major, status, keyword } = filters ?? {};
    const kw = keyword?.toString().trim().toLowerCase() ?? '';

    return data.filter((student) => {
      if (major && student.major !== major) return false;
      if (status && student.status !== status) return false;
      if (kw) {
        const matches =
          student.name.toLowerCase().includes(kw) ||
          student.studentId.includes(kw) ||
          student.major.toLowerCase().includes(kw);
        if (!matches) return false;
      }
      return true;
    });
  };

  const studentPageConfig = {
    filterConfig: studentFilterConfig,
    data: studentData,
    onFilter: handleStudentFilter,
    children: (data: typeof studentData) => (
      <StudentTable data={data} defaultPageSize={25} />
    ),
  };

  return <DataPage config={studentPageConfig} />;
};

// Faculty page example
import { mockFacultyData } from '../data/mockFaculty';
import { facultyFilterConfig } from '../config/filterConfigs';
import FacultyTable from '../components/FacultyTable';

export const FacultyPageExample: React.FC = () => {
  const handleFacultyFilter = (filters: {
    department?: string;
    position?: string;
    status?: string;
    keyword?: string;
  }, data: typeof mockFacultyData) => {
    const { department, position, status, keyword } = filters ?? {};
    const kw = keyword?.toString().trim().toLowerCase() ?? '';

    return data.filter((faculty) => {
      if (department && faculty.department !== department) return false;
      if (position && faculty.position !== position) return false;
      if (status && faculty.status !== status) return false;
      if (kw) {
        const matches =
          faculty.name.toLowerCase().includes(kw) ||
          faculty.facultyId.toLowerCase().includes(kw) ||
          faculty.email.toLowerCase().includes(kw) ||
          faculty.department.toLowerCase().includes(kw);
        if (!matches) return false;
      }
      return true;
    });
  };

  const facultyPageConfig = {
    filterConfig: facultyFilterConfig,
    data: mockFacultyData,
    onFilter: handleFacultyFilter,
    children: (data: typeof mockFacultyData) => (
      <FacultyTable data={data} defaultPageSize={25} />
    ),
  };

  return <DataPage config={facultyPageConfig} />;
};

// Simple page without custom filtering (uses default behavior)
export const SimplePageExample: React.FC = () => {
  const simpleData = [
    { key: '1', name: 'Item 1', category: 'A' },
    { key: '2', name: 'Item 2', category: 'B' },
  ];

  const simpleFilterConfig = {
    title: 'Simple Filtering',
    enableSearch: true,
    searchPlaceholder: 'Search items...',
    filters: [
      {
        key: 'category',
        label: 'Category',
        type: 'select' as const,
        placeholder: 'Select Category',
        options: [
          { value: 'A', label: 'Category A' },
          { value: 'B', label: 'Category B' },
        ],
      },
    ],
  };

  const SimpleTable = ({ data }: { data: typeof simpleData }) => (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: 8 }}>Name</th>
          <th style={{ border: '1px solid #ddd', padding: 8 }}>Category</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.key}>
            <td style={{ border: '1px solid #ddd', padding: 8 }}>{item.name}</td>
            <td style={{ border: '1px solid #ddd', padding: 8 }}>{item.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const simplePageConfig = {
    filterConfig: simpleFilterConfig,
    data: simpleData,
    children: (data: typeof simpleData) => <SimpleTable data={data} />,
  };

  return <DataPage config={simplePageConfig} />;
};