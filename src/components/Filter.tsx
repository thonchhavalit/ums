import React, { useState } from 'react';
import { Row, Col, Select, Input, Button } from 'antd';

const { Option } = Select;

export type FilterOption = {
  key: string;
  label: string;
  type: 'select' | 'input';
  placeholder: string;
  options?: { value: string; label: string }[];
  allowClear?: boolean;
};

export type FilterConfig = {
  title?: string;
  filters: FilterOption[];
  enableSearch?: boolean;
  searchPlaceholder?: string;
  buttonText?: string;
  enableViewToggle?: boolean;
};

type Props = {
  config: FilterConfig;
  onSearch?: (filters: Record<string, string | undefined>) => void;
  onViewChange?: (view: 'table' | 'card') => void;
};

const FlexibleFilter: React.FC<Props> = ({
  config,
  onSearch
}) => {
  const [filterValues, setFilterValues] = useState<
    Record<string, string | undefined>
  >({});
  const [keyword, setKeyword] = useState<string>('');

  const handleFilterChange = (key: string, value: string | undefined) => {
    setFilterValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSearch = () => {
    const searchData = { ...filterValues };
    if (config.enableSearch && keyword) {
      searchData.keyword = keyword;
    }
    onSearch?.(searchData);
  };


  const renderFilterItem = (filter: FilterOption) => {
    if (filter.type === 'select') {
      return (
        <Select
          placeholder={filter.placeholder}
          style={{ width: '100%' }}
          value={filterValues[filter.key]}
          onChange={(val) => handleFilterChange(filter.key, val)}
          allowClear={filter.allowClear ?? true}
        >
          {filter.options?.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      );
    }
    return null;
  };

  return (
    <div
      style={{
        marginBottom: 16,
        background: '#fff',
        padding: '5px 24px 5px 24px',
        borderRadius: 4,
        boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
      }}
    >
      <Row gutter={[16, 16]} align="middle">
        <Col span={24}>
          <Row gutter={[12, 12]} align="middle">
            {/* Title */}
            <Col xs={12} md={3} sm={4} style={{ textAlign: 'left' }}>
              <h2>
                <strong>{config.title || 'Filtering'}</strong>
              </h2>
            </Col>

            {/* Dynamic Filters */}
            {config.filters.map((filter) => {
              const colSize = Math.floor(
                18 / (config.filters.length + (config.enableSearch ? 1 : 0))
              );
              return (
                <Col key={filter.key} xs={24} md={colSize} sm={colSize}>
                  {renderFilterItem(filter)}
                </Col>
              );
            })}

            {/* Search Input (if enabled) */}
            {config.enableSearch && (
              <Col xs={24} md={6} sm={6}>
                <Input
                  placeholder={
                    config.searchPlaceholder || 'Search any keyword...'
                  }
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  style={{ width: '100%' }}
                />
              </Col>
            )}

            {/* Search Button */}
            <Col xs={24} md={3} sm={4} style={{ textAlign: 'right' }}>
              <Button
                className="bg-gradient-primary"
                style={{
                  color: 'white',
                  width: '150px',
                }}
                onClick={handleSearch}
              >
                {config.buttonText || 'Search'}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default FlexibleFilter;
