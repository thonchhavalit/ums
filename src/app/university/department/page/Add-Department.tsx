import React from 'react';
import { Button, Col, Divider, Form, Input, Row, Select } from 'antd';

const { Option } = Select;

const AddDepartmentPage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: Record<string, unknown>) => {
    console.log('Department saved', values);
  };

  return (
    <main style={{ background: '#fff', padding: 24, borderRadius: 4, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Divider titlePlacement='left'>Department Record</Divider>

        <Row gutter={24} style={{ marginTop: 8 }}>
          <Col span={12}>
            <Form.Item name="departmentName" label="Department Name" rules={[{ required: true }]}>
              <Input placeholder="Computer Science" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="departmentCode" label="Department Code" rules={[{ required: true }]}>
              <Input placeholder="CS01" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={8}>
            <Form.Item name="establishedYear" label="Establish Year" rules={[{ required: true }]}>
              <Input placeholder="2020" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="faculty" label="Faculty" rules={[{ required: true }]}>
              <Select placeholder="Select Faculty">
                <Option value="educational">Faculty of Educational Sciences</Option>
                <Option value="law">Faculty of Law and Governance</Option>
                <Option value="economics">Faculty of Economics and Business Studies</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="status" label="Status" rules={[{ required: true }]}>
              <Select>
                <Option value="active">Active</Option>
                <Option value="inactive">Inactive</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name="description" label="Description">
          <Input.TextArea rows={4} />
        </Form.Item>

        {/* <div style={{ marginTop: 12, padding: 12, borderTop: '1px solid #eee' }}>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>Department Head Information</div> */}
        <Divider titlePlacement='left'>Department Head Information</Divider>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="headName" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="headTitle" label="Title/Position" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="headEmail" label="Email Address" rules={[{ required: true, type: 'email' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="headPhone" label="Phone Number" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name="officeLocation" label="Office Location">
          <Input />
        </Form.Item>
        {/* </div> */}

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 16 }}>
          <Button className='cancel-button-style'>Cancel</Button>
          <Button type="primary" htmlType="submit" className='button-style'>
            Save
          </Button>
        </div>
      </Form>
    </main>
  );
};

export default AddDepartmentPage;
