import React from 'react';
import { Button, Col, Divider, Form, Input, Row, Select } from 'antd';

// Use simple labels here (no DualLabel)

const { Option } = Select;

const AddFacultyPage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: Record<string, unknown>) => {
    // TODO: wire to API
    console.log('Faculty saved', values);
  };

  return (
    <main style={{ background: '#fff', padding: 24, borderRadius: 4, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Divider titlePlacement='left'>Faculty Record</Divider>

        <Row gutter={24} style={{ marginTop: 8 }}>
          <Col span={12}>
            <Form.Item name="facultyName" label="Faculty Name" rules={[{ required: true }]}>
              <Input placeholder="Computer Science" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="facultyCode" label="Faculty Code" rules={[{ required: true }]}>
              <Input placeholder="CS01" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="establishedYear" label="Established Year" rules={[{ required: true }]}>
              <Input placeholder="2020" />
            </Form.Item>
          </Col>
          <Col span={12}>
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
                    <div style={{ fontWeight: 600, marginBottom: 8 }}>Dean Information</div> */}
        <Divider titlePlacement='left'>Dean Information</Divider>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="deanName" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="deanTitle" label="Title/Position" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="deanEmail" label="Email Address" rules={[{ required: true, type: 'email' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="deanPhone" label="Phone Number" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="telegramUserId" label="Telegram User ID">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="telegramPhone" label="Telegram Phone Number">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name="officeLocation" label="Office Location">
          <Input />
        </Form.Item>
        {/* </div> */}

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 16 }}>
          <Button>Cancel</Button>
          <Button type="primary" htmlType="submit" className='button-style'>
                        Save
          </Button>
        </div>
      </Form>
    </main>
  );
};

export default AddFacultyPage;
