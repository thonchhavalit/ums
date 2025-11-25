import React from 'react';
import { Table, Space, Button, Dropdown, Avatar } from 'antd';
import {
  EllipsisOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

import type { Faculty } from '../data/mockFaculty';
import { mockFacultyData } from '../data/mockFaculty';

const columns: ColumnsType<Faculty> = [
  {
    title: 'No',
    dataIndex: 'no',
    key: 'no',
    width: 60,
    align: 'center',
  },
  {
    title: 'Dean',
    dataIndex: 'dean',
    key: 'dean',
    width: 150,
    render: (dean: string) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Avatar size="small" icon={<UserOutlined />} />
        <span>{dean}</span>
      </div>
    ),
  },
  {
    title: 'Faculty Name',
    dataIndex: 'facultyName',
    key: 'facultyName',
    sorter: (a, b) => a.facultyName.localeCompare(b.facultyName),
    width: 350,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: 200,
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
    width: 150,
  },
  {
    title: 'Student',
    dataIndex: 'student',
    key: 'student',
    width: 100,
    align: 'center',
    sorter: (a, b) => a.student - b.student,
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
    width: 100,
    align: 'center',
    sorter: (a, b) => a.year - b.year,
  },
  {
    title: 'Departments',
    dataIndex: 'departments',
    key: 'departments',
    width: 120,
    align: 'center',
  },
  {
    title: 'Action',
    key: 'action',
    width: 80,
    fixed: 'right',
    render: (_, _record) => {
      const actionItems = [
        { key: 'view', label: 'View', icon: <EyeOutlined />, style: { color: 'blue' } },
        { key: 'edit', label: 'Edit', icon: <EditOutlined /> },
        { key: 'delete', label: 'Delete', icon: <DeleteOutlined /> },
      ];

      return (
        <Space size="middle">
          <Dropdown menu={{ items: actionItems }} trigger={['click']}>
            <Button
              icon={<EllipsisOutlined />}
              className='action-button-style'
              size='small'
              shape="circle"
            />
          </Dropdown>
        </Space>
      );
    },
  },
];

type Props = {
  data?: Faculty[];
  defaultPageSize?: number;
};

const FacultyTable: React.FC<Props> = ({ data, defaultPageSize = 25 }) => {
  const dataSource = data ?? mockFacultyData;

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <h3 style={{ margin: 0 }}>Faculties</h3>
        <Button
          className='button-style bg-gradient-primary'
          icon={<PlusOutlined />}
          style={{ color: 'white' }}
        >
          Add
        </Button>
      </div>

      <Table<Faculty>
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: defaultPageSize,
          showSizeChanger: true,
          pageSizeOptions: ['10', '25', '50'],
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
        }}
        rowKey="key"
        bordered
        size="small"
        scroll={{ x: 1200 }}
      />
    </div>
  );
};

export default FacultyTable;