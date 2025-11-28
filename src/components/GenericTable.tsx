import React from 'react';
import { Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { PlusOutlined } from '@ant-design/icons';

type Props<T> = {
  title?: React.ReactNode;
  columns: ColumnsType<T>;
  data: T[];
  rowKey?: string | ((record: T, index?: number) => React.Key);
  pageSize?: number;
  onAdd?: () => void;
  addLabel?: string;
};

function GenericTable<T extends object>({ title, columns, data, rowKey = 'key', pageSize = 25, onAdd, addLabel = 'Add' }: Props<T>) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h3 style={{ margin: 0 }}>{title}</h3>
        {onAdd ? (
          <Button className='button-style' icon={<PlusOutlined />} onClick={onAdd}>{addLabel}</Button>
        ) : null}
      </div>

      <Table<T>
        columns={columns}
        dataSource={data}
        pagination={{ 
          pageSize,
          showSizeChanger: true,
          pageSizeOptions: ['10', '25', '50'], 
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}` 
        }}
        rowKey={rowKey}
        bordered
        size="small"
      />
    </div>
  );
}

export default GenericTable;
