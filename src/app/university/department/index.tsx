import React, { useState } from 'react';

import FlexibleFilter from '../../../components/Filter';
import { mockDepartments } from '../../../data/mockData';

import DepartmentTable from './page/Table';

import { DepartmentFilterConfig } from '../../../config/filterConfigs';


const DepartmentPage: React.FC = () => {
  const [data, setData] = useState(mockDepartments);

  const handleDepartmentFilter = (filters: {
		faculty?: string;
		year?: string;
		keyword?: string;
	}) => {
    const { faculty, year, keyword } = filters ?? {};
    const kw = keyword?.toString().trim().toLowerCase() ?? '';

    const filtered = mockDepartments.filter((departmentItem) => {
      if (faculty && departmentItem.departmentName !== faculty) return false;
      if (year && departmentItem.year.toString() !== year) return false;
      if (kw) {
        const matches =
					departmentItem.head.toLowerCase().includes(kw) ||
					departmentItem.departmentName.toLowerCase().includes(kw) ||
					departmentItem.faculty.toLowerCase().includes(kw) ||
					departmentItem.code.includes(kw);
        if (!matches) return false;
      }
      return true;
    });

    setData(filtered);
  };
  return (
    <>
      <section>
        <FlexibleFilter
          config={DepartmentFilterConfig}
          onSearch={handleDepartmentFilter}
        />
      </section>
      <main
        style={{
          background: '#fff',
          padding: 24,
          borderRadius: 4,
          boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
        }}
      >
        <DepartmentTable
          data={data} />
      </main>
    </>
  );
};

export default DepartmentPage;
