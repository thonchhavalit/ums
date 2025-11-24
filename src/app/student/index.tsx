import React, { useState } from 'react';

import { mockData } from '../../data/mockStudents';
import FlexibleFilter from '../../components/Filter.tsx';
import { studentFilterConfig } from '../../config/filterConfigs.ts';

import StudentTable from './page/Table';


function StudentPage(): React.ReactElement {
  const [data, setData] = useState(mockData);

  const handleFilter = (filters: {
    major?: string;
    status?: string;
    keyword?: string;
  }) => {
    const { major, status, keyword } = filters ?? {};
    const kw = keyword?.toString().trim().toLowerCase() ?? '';

    const filtered = mockData.filter((s) => {
      if (major && s.major !== major) return false;
      if (status && s.status !== status) return false;
      if (kw) {
        const matches =
          s.name.toLowerCase().includes(kw) ||
          s.studentId.includes(kw) ||
          s.major.toLowerCase().includes(kw);
        if (!matches) return false;
      }
      return true;
    });

    setData(filtered);
  };


  const handleViewChange = (view: 'table' | 'card') => {
    console.log('View changed to:', view);
  };

  return (
    <>
      <div>
        <FlexibleFilter
          config={studentFilterConfig}
          onSearch={handleFilter}
          onViewChange={handleViewChange}
        />
      </div>
      <div
        style={{
          background: '#fff',
          padding: 24,
          borderRadius: 4,
          boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
        }}
      >
        <StudentTable data={data} defaultPageSize={25} />
      </div>
    </>
  );
}

export default StudentPage;
