import React, { useState } from 'react';

import { mockFacultyData } from '../../../data/mockFaculty';
import { facultyFilterConfig } from '../../../config/filterConfigs';
import FlexibleFilter from '../../../components/Filter.tsx';

import FacultyTable from './page/Table';

// import FlexibleFilter from '@/components/Filter';



function FacultyPage(): React.ReactElement {
  const [data, setData] = useState(mockFacultyData);

  const handleFacultyFilter = (filters: {
    faculty?: string;
    year?: string;
    keyword?: string;
  }) => {
    const { faculty, year, keyword } = filters ?? {};
    const kw = keyword?.toString().trim().toLowerCase() ?? '';

    const filtered = mockFacultyData.filter((facultyItem) => {
      if (faculty && facultyItem.facultyName !== faculty) return false;
      if (year && facultyItem.year.toString() !== year) return false;
      if (kw) {
        const matches =
          facultyItem.dean.toLowerCase().includes(kw) ||
          facultyItem.facultyName.toLowerCase().includes(kw) ||
          facultyItem.email.toLowerCase().includes(kw) ||
          facultyItem.phoneNumber.includes(kw);
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
      <section>
        <FlexibleFilter
          config={facultyFilterConfig}
          onSearch={handleFacultyFilter}
          onViewChange={handleViewChange}
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
        <FacultyTable
          data={data}
          defaultPageSize={25}
        />
      </main>
    </>
  );
}

export default FacultyPage;