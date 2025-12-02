import React from 'react';
import { Space, Button, Dropdown, Avatar } from 'antd';
import { EllipsisOutlined, EyeOutlined, EditOutlined, DeleteOutlined, UserOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';

import GenericTable from '../../../../components/GenericTable';
import { mockDepartments } from '../../../../data/mockData';

type Dept = {
  key: string;
  no: string;
  head: string;
  departmentName: string;
  faculty: string;
  code: string;
  students: number;
  year: number;
  majors: number;
};

const columns: ColumnsType<Dept> = [
  {
    title: 'No',
    dataIndex: 'no',
    key: 'no',
    width: 60,
    align: 'center',
  },
  {
    title: 'Head of Department',
    dataIndex: 'head',
    key: 'head',
    width: 180,
    render: (head: string) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Avatar size="small" icon={<UserOutlined />} />
        <span>{head}</span>
      </div>
    ),
  },
  {
    title: 'Department Name',
    dataIndex: 'departmentName',
    key: 'departmentName',
    width: 300,
  },
  {
    title: 'Faculty',
    dataIndex: 'faculty',
    key: 'faculty',
    width: 240,
  },
  {
    title: 'Dep.Code',
    dataIndex: 'code',
    key: 'code',
    width: 100,
    align: 'center',
  },
  {
    title: 'Students',
    dataIndex: 'students',
    key: 'students',
    width: 100,
    align: 'center',
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
    width: 100,
    align: 'center',
  },
  {
    title: 'Majors',
    dataIndex: 'majors',
    key: 'majors',
    width: 100,
    align: 'center',
  },
  {
    title: 'Action',
    key: 'action',
    width: 80,
    fixed: 'right',
    render: (_: string, _record: Dept) => {
      const actionItems = [
        { key: 'view', label: 'View', icon: <EyeOutlined />, style: { color: 'blue' } },
        { key: 'edit', label: 'Edit', icon: <EditOutlined /> },
        { key: 'delete', label: 'Delete', icon: <DeleteOutlined /> },
      ];

      return (
        <Space size="middle">
          <Dropdown menu={{ items: actionItems }} trigger={['click']}>
            <Button icon={<EllipsisOutlined />} className="action-button-style" size="small" shape="circle" />
          </Dropdown>
        </Space>
      );
    },
  },
];


type Props = {
  data?: Dept[];
  defaultPageSize?: number;
};

const DepartmentTable: React.FC<Props> = ({ data, defaultPageSize = 25 }) => {
  const navigate = useNavigate();
  const dataSource = data ?? mockDepartments;

  return (
    <GenericTable
      title="Departments"
      columns={columns}
      data={dataSource}
      pageSize={defaultPageSize}
      onAdd={() => navigate('/university/departments/add')}
      addLabel="Add"
    />
  );
};

export default DepartmentTable;
