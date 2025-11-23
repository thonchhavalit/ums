import React, { useState } from 'react';
import { Row, Col, Select, Input, Button, Radio, Space } from 'antd';

const { Option } = Select;

type Props = {
  onSearch?: (filters: { major?: string; status?: string; keyword?: string }) => void;
  onViewChange?: (view: 'table' | 'card') => void;
};

const StudentFilter: React.FC<Props> = ({ onSearch, onViewChange }) => {
  const [major, setMajor] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState<string | undefined>(undefined);
  const [keyword, setKeyword] = useState<string>('');
  const [view, setView] = useState<'table' | 'card'>('table');

  const handleSearch = () => {
    onSearch?.({ major, status, keyword });
  };

  const handleViewChange = (e: any) => {
    const v = e.target.value as 'table' | 'card';
    setView(v);
    onViewChange?.(v);
  };

  return (
    <div style={{ marginBottom: 16, background: '#fff', padding: 12, borderRadius: 4, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
      <Row align="middle" gutter={16}>
        <Col xs={24} md={16}>
          <Space style={{ width: '100%' }} wrap>
            <strong>Filtering</strong>
            <Select placeholder="Select Major" style={{ minWidth: 160 }} value={major} onChange={val => setMajor(val)} allowClear>
              <Option value="IT">IT</Option>
              <Option value="Law">Law</Option>
              <Option value="Business">Business</Option>
              <Option value="Chemistry">Chemistry</Option>
            </Select>

            <Select placeholder="Select Status" style={{ minWidth: 160 }} value={status} onChange={val => setStatus(val)} allowClear>
              <Option value="Active">Active</Option>
              <Option value="In-Active">In-Active</Option>
              <Option value="Suspend">Suspend</Option>
            </Select>

            <Input placeholder="Search any keyword..." value={keyword} onChange={e => setKeyword(e.target.value)} style={{ minWidth: 260 }} />
    
            <Button style={{backgroundColor:'var(--primary-700)', color: 'white'}}  onClick={handleSearch}>Search</Button>
          </Space>
        </Col>

        {/* <Col xs={24} md={8} style={{ textAlign: 'right' }}>
          <Space>
            <Radio.Group value={view} onChange={handleViewChange} optionType="button" buttonStyle="solid">
              <Radio.Button value="table">Table</Radio.Button>
              <Radio.Button value="card">Card</Radio.Button>
            </Radio.Group>
          </Space>
        </Col> */}
      </Row>
    </div>
  );
};

export default StudentFilter;
