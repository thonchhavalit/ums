import React from 'react';
import { Tag, Space, Button, Dropdown } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

import type { Student } from '../../../../data/mockStudents';
import { mockData } from '../../../../data/mockStudents';
import GenericTable from '../../../../components/GenericTable';
import editIcon from '../../../../assets/icons/edit.svg';
import deleteIcon from '../../../../assets/icons/delete.svg';
import viewIcon from '../../../../assets/icons/view.svg';

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
        { key: 'view', label: 'View', icon: <img src={viewIcon} alt="view" />, },
        { key: 'edit', label: 'Edit', icon: <img src={editIcon} alt="edit" /> },
        { key: 'delete', label: 'Delete', icon: <img src={deleteIcon} alt="delete" /> },
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
    <GenericTable
      title="Student List"
      columns={columns}
      data={dataSource}
      pageSize={defaultPageSize}
      onAdd={() => {}}
      addLabel="Add"
    />
  );
};

export default StudentTable;