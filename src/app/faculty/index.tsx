import React from 'react';

import { mockFacultyData } from '../../data/mockFaculty';
import { facultyFilterConfig } from '../../config/filterConfigs';
import FacultyTable from '../../components/FacultyTable';
import DataPage from '../../components/DataPage';



function FacultyPage(): React.ReactElement {
  const handleFacultyFilter = (filters: {
    faculty?: string;
    year?: string;
    keyword?: string;
  }, data: typeof mockFacultyData) => {
    const { faculty, year, keyword } = filters ?? {};
    const kw = keyword?.toString().trim().toLowerCase() ?? '';

    const filtered = data.filter((facultyItem) => {
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

    return filtered;
  };

  const dataPageConfig = {
    filterConfig: facultyFilterConfig,
    data: mockFacultyData,
    onFilter: handleFacultyFilter,
    children: (data: typeof mockFacultyData) => (
      <FacultyTable data={data} defaultPageSize={25} />
    ),
  };

  return <DataPage config={dataPageConfig} />;
}

export default FacultyPage;
