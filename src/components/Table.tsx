import React from 'react';
import { Table, Tag, Space, Button, Dropdown } from 'antd';
import {
  EllipsisOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

import type { Student } from '../data/mockStudents';
import { mockData } from '../data/mockStudents';

const statusColor = (status: string) => {
  switch (status) {
  case 'Active':
    return '#00997E';
  case 'In-Active':
    return '#FF414B';
  case 'Suspend':
    return '#FFBE66';
  default:
    return 'default';
  }
};

const columns: ColumnsType<Student> = [
  {
    title: 'Student Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  { title: 'Gender', dataIndex: 'gender', key: 'gender' },
  { title: 'Student ID', dataIndex: 'studentId', key: 'studentId' },
  { title: 'Date of Birth', dataIndex: 'dob', key: 'dob' },
  { title: 'Degree Level', dataIndex: 'degree', key: 'degree' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  { title: 'Phone Number', dataIndex: 'phone', key: 'phone' },
  { title: 'Enroll Date', dataIndex: 'enrollDate', key: 'enrollDate' },
  { title: 'Major', dataIndex: 'major', key: 'major' },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text: string) => <Tag color={statusColor(text)}>{text}</Tag>,
  },
  {
    title: 'Action',
    key: 'action',
    width: 120,
    render: (_, _record) => {
      const actionItems = [
        { key: 'view', label: 'View', icon: <EyeOutlined />, style:{ color: 'blue'} },
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
            />
          </Dropdown>
        </Space>
      );
    },
  },
];

type Props = {
  data?: Student[];
  defaultPageSize?: number;
};

const StudentTable: React.FC<Props> = ({ data, defaultPageSize = 25 }) => {
  const dataSource = data ?? mockData;

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
        <h3 style={{ margin: 0 }}>Student List</h3>
        <Button
          className='button-style'
          icon={<PlusOutlined />}
        >
          Add
        </Button>
      </div>

      <Table<Student>
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
      />
    </div>
  );
};

export default StudentTable;
