import React, { useState } from 'react';
import { Button, Col, DatePicker, Divider, Form, Input, Radio, Row, Select, Space } from 'antd';

import PhotoUpload from '../../../../components/Image-Upload';
import DualLabel from '../../../../utils/util';
const { Option } = Select;

const StudentRegisterForm: React.FC = () => {
  const [form] = Form.useForm();
  const [step, setStep] = useState<number>(1);

  const next = async () => {
    try {
      if (step === 1) {
        await form.validateFields(['nameKh', 'nameEn', 'gender', 'dob', 'phone']);
        setStep(2);
      }
    } catch {
      // validation errors - keep user on current step
    }
  };

  const prev = () => setStep((s) => Math.max(1, s - 1));

  const onFinish = (values: Record<string, unknown>) => {
    // TODO: wire to API
    console.log('Submitted registration:', values);
  };

  return (

    <Form form={form} layout="vertical" onFinish={onFinish} initialValues={{ studyMode: 'on-site' }}>
      {step === 1 && (
        <div
          style={{
            height: 'calc(100vh - 125px)', 
            overflowY: 'auto',             
          }}
        >
          <Divider titlePlacement="start" style={{ margin: 0 }}>
            Personal Information
          </Divider>
          <Row gutter={16} style={{ margin: '20px 0 0 0' }}>
            <Col span={6}>
              <Form.Item
                name="nameKh"
                label={<DualLabel kh="នាមត្រកូល នាមខ្លួនជាអក្សរខ្មែរ" en="Name in Khmer" />}
                rules={[{ required: true, message: 'Please enter name in Khmer' }]}
              >
                <Input placeholder="បញ្ចូលឈ្មោះជាអក្សរខ្មែរ" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="nameEn"
                label={<DualLabel kh="នាមត្រកូល នាមខ្លួនជាអក្សរឡាតាំង" en="Name in English" />}
                rules={[{ required: true, message: 'Please enter name in English' }]}
              >
                <Input placeholder="បញ្ចូលឈ្មោះជាអក្សរឡាតាំង" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="gender"
                label={<DualLabel kh="ភេទ" en="Gender" />}
                rules={[{ required: true }]}
              >
                <Select>
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="nationality" label={<DualLabel kh="សញ្ជាតិ" en="Nationality" />} rules={[{ required: true }]}>
                <Input placeholder="KHMER" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} style={{ margin: 0 }}>
            <Col span={6}>
              <Form.Item name="dob" label={<DualLabel kh="ថ្ងៃខែឆ្នាំកំណើត" en="Date of Birth" />} rules={[{ required: true }]}>
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="phone" label={<DualLabel kh="លេខទូរស័ព្ទ" en="Phone Number" />} rules={[{ required: true }]}>
                <Input placeholder="0974769798" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="currentEmployment" label={<DualLabel kh="មុខរបរសព្វថ្ងៃ" en="Current Employment" />}>
                <Input placeholder="student" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="from" label={<DualLabel kh="មកពីស្ថាប័ន" en="From" />}>
                <Input placeholder="Kratie" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} style={{ margin: 0 }}>
            <Col span={24}>
              <Form.Item name="currentAddress" label={<DualLabel kh="អាសយដ្ឋានបច្ចុប្បន្ន" en="Current Address" />} rules={[{ required: true, message: 'Please enter current address' }]}>
                <Input placeholder="Sen Sok, Phnom Penh" />
              </Form.Item>
            </Col>
          </Row>

          <Divider titlePlacement="start" style={{ margin: 0 }}>
            Educational Background
          </Divider>
          <Row gutter={16} style={{ margin: '20px 0 0 0' }}>
            <Col span={8}>
              <Form.Item name="latestDegree" label={<DualLabel kh="សញ្ញាបត្រចុងក្រោយ" en="Latest Degree" />}>
                <Select allowClear>
                  <Option value="highschool">Grade 12</Option>
                  <Option value="associate">Associate's Degree</Option>
                  <Option value="bachelor">Bachelor's Degree</Option>
                  <Option value="master">Master's Degree</Option>
                  <Option value="phd">Doctor's Degree</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="major" label={<DualLabel kh="ជំនាញ" en="Major" />}>
                <Input placeholder="IT" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="year" label={<DualLabel kh="ឆ្នាំសិក្សា" en="Year" />}>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Divider titlePlacement="start" style={{ margin: 0 }}>
            Emergency Contact
          </Divider>
          <Row gutter={16} style={{ margin: '20px 0 0 0' }}>
            <Col span={8}>
              <Form.Item name="emergencyName" label={<DualLabel kh="ឈ្មោះ(ក្រៅពីសាមីខ្លួន)" en="Name" />}>
                <Input placeholder="John Doe" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="emergencyPhone" label={<DualLabel kh="លេខទូរស័ព្ទ" en="Phone Number" />}>
                <Input placeholder="0974769798" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} style={{ margin: 0 }}>
            <Col span={24}>
              <Form.Item name="emergencyAddress" label={<DualLabel kh="អាសយដ្ឋាន" en="Address" />}>
                <Input />
              </Form.Item>
            </Col>
          </Row>

        </div>
      )}

      {step === 2 && (
        <div>
          <Divider titlePlacement="start" style={{ margin: 0 }}>
            Admission Record
          </Divider>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flex: 1, marginRight: '0px' }}>
              <Row gutter={16} style={{ margin: '20px 0 0 0' }}>
                <Col span={8}>
                  <Form.Item name="ad_nameKh" label={<DualLabel kh="នាមត្រកូល នាមខ្លួនជាអក្សរខ្មែរ" en="Name in Khmer" />} rules={[{ required: true, message: 'Please enter name in Khmer' }]}>
                    <Input placeholder="បញ្ចូលឈ្មោះជាអក្សរខ្មែរ" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item name="ad_nameEn" label={<DualLabel kh="នាមត្រកូល នាមខ្លួនជាអក្សរឡាតាំង" en="Name in English" />} rules={[{ required: true, message: 'Please enter name in English' }]}>
                    <Input placeholder="បញ្ចូលឈ្មោះជាអក្សរឡាតាំង" />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name="ad_gender" label={<DualLabel kh="ភេទ" en="Gender" />} rules={[{ required: true }]}>
                    <Select>
                      <Option value="male">Male</Option>
                      <Option value="female">Female</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item name="ad_nationality" label={<DualLabel kh="សញ្ជាតិ" en="Nationality" />} rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item name="ad_dateOfBirth" label={<DualLabel kh="ថ្ងៃខែឆ្នាំកំណើត" en="Date of Birth" />}>
                    <DatePicker style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name="educationAttainment" label={<DualLabel kh="កម្រិតវប្បធម៌" en="Education Attainment" />}>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </div>

            <div style={{ width: '150px', marginTop: '20px' }}>
              <PhotoUpload style={{ width: '100%', height: '200px' }} />
            </div>
          </div>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="address" label={<DualLabel kh="អាសយដ្ឋាន" en="Address" />}>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item name="i_would_like_to_study" label={<DualLabel kh="សុំចូលរៀនមហាវិទ្យាល័យ" en="I would like to study" />}>
                <Input placeholder="បញ្ចូលមហាវិទ្យាល័យដែលចង់សិក្សា" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="apply_major" label={<DualLabel kh="ជំនាញ" en="Major" />}>
                <Input placeholder="IT" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="apply_year" label={<DualLabel kh="ឆ្នាំទី" en="Year" />}>
                <Input placeholder="2025" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="semester" label={<DualLabel kh="ឆមាសទី" en="Semester" />}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="studyMode" label={<DualLabel kh="របៀបសិក្សា" en="Study Mode" />}>
                <Radio.Group>
                  <Radio value="on-site">On-site</Radio>
                  <Radio value="online">Online</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
        </div>
      )}

      <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end' }}>
        <div>
          {step < 2 && (
            <Button type="primary" onClick={next} className="button-style">
              Next Page
            </Button>
          )}
          {step === 2 && (
            <Space>
              <Button onClick={prev} danger>
                Prev Page
              </Button>
              <Button type="primary" htmlType="submit" className="button-style">
                Submit
              </Button>
            </Space>
          )}
        </div>
      </div>
    </Form>
  );
};

export default StudentRegisterForm;
