import React, { useState, useEffect } from 'react';

import type { FilterConfig } from './Filter';
import FlexibleFilter from './Filter';

interface DataPageConfig<T = unknown> {
  filterConfig: FilterConfig;
  data: T[];
  onFilter?: (filters: Record<string, string | undefined>, data: T[]) => T[];
  defaultPageSize?: number;
  children: (data: T[]) => React.ReactNode;
}

interface Props<T = unknown> {
  config: DataPageConfig<T>;
}

function DataPage<T = unknown>({ config }: Props<T>) {
  const { filterConfig, data, onFilter, children } = config;
  const [filteredData, setFilteredData] = useState<T[]>(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleFilter = (filters: Record<string, string | undefined>) => {
    if (onFilter) {
      const filtered = onFilter(filters, data);
      setFilteredData(filtered);
    } else {
      // Default filtering logic if no custom filter is provided
      setFilteredData(data);
    }
  };

  const handleViewChange = (view: 'table' | 'card') => {
    console.log('View changed to:', view);
  };

  return (
    <>
      <div>
        <FlexibleFilter
          config={filterConfig}
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
        {children(filteredData)}
      </div>
    </>
  );
}

export default DataPage;