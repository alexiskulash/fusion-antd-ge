import React, { useState } from "react";
import {
  Layout,
  Card,
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  Typography,
  Space,
  Row,
  Col,
  Table,
  Tabs,
  Tag,
  Divider,
} from "antd";
import { SearchOutlined, PlayCircleOutlined } from "@ant-design/icons";

const { Content, Header, Sider } = Layout;
const { Text } = Typography;
const { Option } = Select;

const PatientRecord = () => {
  const [selectedRows, setSelectedRows] = useState(["1"]);

  // Patient record table data
  const patientRecords = [
    {
      key: "1",
      scheduled: "Tue Jan 18, 2025 8:20:33 AM",
      number: "001",
      accession: "ACC001",
      spsDesc: "Cardiac Monitor",
      modality: "ECG",
      referring: "Dr. Smith",
      scheduledTime: "8:20 AM",
      status: "Active",
      localProtocol: "Protocol A",
      custom: "Custom A",
    },
  ];

  const patientRecordColumns = [
    {
      title: "Scheduled",
      dataIndex: "scheduled",
      key: "scheduled",
      width: 150,
    },
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
      width: 80,
    },
    {
      title: "Accession",
      dataIndex: "accession",
      key: "accession",
      width: 100,
    },
    {
      title: "SPS Desc.",
      dataIndex: "spsDesc",
      key: "spsDesc",
      width: 120,
    },
    {
      title: "Modality",
      dataIndex: "modality",
      key: "modality",
      width: 80,
    },
    {
      title: "Referring",
      dataIndex: "referring",
      key: "referring",
      width: 100,
    },
    {
      title: "Scheduled...",
      dataIndex: "scheduledTime",
      key: "scheduledTime",
      width: 100,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 80,
      render: (status: string) => (
        <Tag color={status === "Active" ? "green" : "default"}>{status}</Tag>
      ),
    },
    {
      title: "Local Protocol",
      dataIndex: "localProtocol",
      key: "localProtocol",
      width: 120,
    },
    {
      title: "Custom",
      dataIndex: "custom",
      key: "custom",
      width: 100,
    },
  ];

  const monitoringData = [
    { label: "Whole Body", value: "6.70", unit: "V" },
    { label: "Ave Wrng", value: "2.00", unit: "V" },
    { label: "Ave Wrng", value: "8.00", unit: "V" },
  ];

  const tabItems = [
    {
      key: "schedule",
      label: "Schedule",
    },
    {
      key: "archive",
      label: "Archive",
    },
    {
      key: "settings",
      label: "Settings",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#4a5568" }}>
      {/* Top Header */}
      <Header
        style={{
          backgroundColor: "#2d3748",
          padding: "0 16px",
          height: "48px",
          lineHeight: "48px",
        }}
      >
        <Row justify="space-between" align="middle">
          <Col>
            <Tabs
              defaultActiveKey="schedule"
              size="small"
              items={tabItems}
              className="header-tabs"
            />
          </Col>
          <Col>
            <Space>
              <Text style={{ color: "white", fontSize: "14px" }}>
                getservice Cardiac Monitor
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: "14px",
                  fontFamily: "monospace",
                  backgroundColor: "#1a202c",
                  padding: "2px 8px",
                  borderRadius: "4px",
                }}
              >
                000 00:00
              </Text>
              <Text style={{ color: "#a0aec0", fontSize: "12px" }}>
                Was Sca...
              </Text>
            </Space>
          </Col>
        </Row>
      </Header>

      <Layout>
        <Content style={{ backgroundColor: "#4a5568" }}>
          {/* Patient Record Section */}
          <div
            style={{
              backgroundColor: "#718096",
              padding: "8px 16px",
              borderBottom: "1px solid #2d3748",
            }}
          >
            <Row justify="space-between" align="middle">
              <Col>
                <Space>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Patient Record
                  </Text>
                  <Checkbox style={{ color: "white" }}>In-Progress</Checkbox>
                  <Checkbox style={{ color: "white" }}>Deleted</Checkbox>
                  <Checkbox style={{ color: "white" }}>Completed</Checkbox>
                </Space>
              </Col>
              <Col>
                <Space>
                  <Text style={{ color: "white", fontSize: "12px" }}>
                    Last: Tue Jan 18, 2025 8:20:33 AM
                  </Text>
                  <Text style={{ color: "white", fontSize: "12px" }}>
                    First: Reset/Download TPs was succes...
                  </Text>
                  <Button
                    size="small"
                    icon={<SearchOutlined />}
                    style={{
                      backgroundColor: "#2d3748",
                      borderColor: "#4a5568",
                      color: "white",
                    }}
                  >
                    Search/Refresh
                  </Button>
                </Space>
              </Col>
            </Row>
          </div>

          {/* Patient Record Table */}
          <div style={{ padding: "8px 16px", backgroundColor: "#4a5568" }}>
            <Table
              dataSource={patientRecords}
              columns={patientRecordColumns}
              size="small"
              pagination={false}
              rowSelection={{
                type: "checkbox",
                selectedRowKeys: selectedRows,
                onChange: setSelectedRows,
              }}
              style={{
                backgroundColor: "#e2e8f0",
                borderRadius: "4px",
              }}
              className="patient-record-table"
            />
          </div>

          {/* Main Content Area */}
          <Row
            style={{ padding: "16px", backgroundColor: "#4a5568" }}
            gutter={16}
          >
            {/* Patient Information */}
            <Col span={8}>
              <Card
                title={<Text style={{ color: "white" }}>Patient</Text>}
                style={{ backgroundColor: "#2d3748", border: "none" }}
                headStyle={{
                  backgroundColor: "#1a202c",
                  borderBottom: "1px solid #4a5568",
                }}
                bodyStyle={{ backgroundColor: "#2d3748", padding: "16px" }}
              >
                <Form layout="vertical" size="small">
                  <Form.Item
                    label={<Text style={{ color: "white" }}>Name:</Text>}
                  >
                    <Input
                      className="dark-input"
                      style={{
                        backgroundColor: "#4a5568",
                        borderColor: "#718096",
                        color: "white",
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    label={<Text style={{ color: "white" }}>Patient ID:</Text>}
                  >
                    <Row gutter={8}>
                      <Col span={4}>
                        <Input
                          className="dark-input"
                          style={{
                            backgroundColor: "#4a5568",
                            borderColor: "#718096",
                            color: "white",
                          }}
                          placeholder="■"
                        />
                      </Col>
                      <Col span={20}>
                        <Input
                          className="dark-input"
                          style={{
                            backgroundColor: "#4a5568",
                            borderColor: "#718096",
                            color: "white",
                          }}
                          placeholder="ID"
                        />
                      </Col>
                    </Row>
                  </Form.Item>

                  <Form.Item
                    label={<Text style={{ color: "white" }}>Sex:</Text>}
                  >
                    <Select
                      defaultValue="M"
                      style={{ width: "100%" }}
                      className="dark-select"
                    >
                      <Option value="M">M</Option>
                      <Option value="F">F</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label={<Text style={{ color: "white" }}>Age:</Text>}
                  >
                    <Input
                      className="dark-input"
                      style={{
                        backgroundColor: "#4a5568",
                        borderColor: "#718096",
                        color: "white",
                      }}
                      placeholder="MM-DD-YYYY"
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <Text style={{ color: "white" }}>Date of Birth:</Text>
                    }
                  >
                    <Input
                      className="dark-input"
                      style={{
                        backgroundColor: "#4a5568",
                        borderColor: "#718096",
                        color: "white",
                      }}
                      placeholder="MM-DD-YYYY"
                    />
                  </Form.Item>

                  <Form.Item
                    label={<Text style={{ color: "white" }}>Accessed:</Text>}
                  >
                    <Input
                      className="dark-input"
                      style={{
                        backgroundColor: "#4a5568",
                        borderColor: "#718096",
                        color: "white",
                      }}
                    />
                  </Form.Item>
                </Form>
              </Card>
            </Col>

            {/* Exam Information */}
            <Col span={8}>
              <Card
                title={<Text style={{ color: "white" }}>Exam</Text>}
                style={{ backgroundColor: "#2d3748", border: "none" }}
                headStyle={{
                  backgroundColor: "#1a202c",
                  borderBottom: "1px solid #4a5568",
                }}
                bodyStyle={{ backgroundColor: "#2d3748", padding: "16px" }}
              >
                <Form layout="vertical" size="small">
                  <Form.Item
                    label={<Text style={{ color: "white" }}>Accession:</Text>}
                  >
                    <Input
                      className="dark-input"
                      style={{
                        backgroundColor: "#4a5568",
                        borderColor: "#718096",
                        color: "white",
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    label={<Text style={{ color: "white" }}>Exam:</Text>}
                  >
                    <Input
                      className="dark-input"
                      style={{
                        backgroundColor: "#4a5568",
                        borderColor: "#718096",
                        color: "white",
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    label={<Text style={{ color: "white" }}>Description:</Text>}
                  >
                    <Input
                      className="dark-input"
                      style={{
                        backgroundColor: "#4a5568",
                        borderColor: "#718096",
                        color: "white",
                      }}
                    />
                  </Form.Item>

                  <Space
                    direction="vertical"
                    style={{ width: "100%", marginTop: "16px" }}
                  >
                    <Text style={{ color: "white" }}>* Operator:</Text>
                    <Select
                      defaultValue="Radiologist"
                      style={{ width: "100%" }}
                      className="dark-select"
                    >
                      <Option value="Radiologist">Radiologist</Option>
                      <Option value="Technician">Technician</Option>
                    </Select>

                    <Text style={{ color: "white", marginTop: "8px" }}>
                      Last Name First Name
                    </Text>

                    <Text style={{ color: "white", marginTop: "16px" }}>
                      Referring
                      <br />
                      Phys.:
                    </Text>

                    <Text style={{ color: "white", marginTop: "8px" }}>
                      Referring Phys.: Last Name First Name
                    </Text>
                  </Space>
                </Form>

                <Button
                  type="primary"
                  icon={<PlayCircleOutlined />}
                  style={{
                    marginTop: "24px",
                    backgroundColor: "#3182ce",
                    borderColor: "#3182ce",
                    width: "100%",
                  }}
                >
                  Start Exam
                </Button>
              </Card>
            </Col>

            {/* Other Information */}
            <Col span={8}>
              <Card
                title={
                  <Text style={{ color: "white" }}>Other Information</Text>
                }
                style={{ backgroundColor: "#2d3748", border: "none" }}
                headStyle={{
                  backgroundColor: "#1a202c",
                  borderBottom: "1px solid #4a5568",
                }}
                bodyStyle={{ backgroundColor: "#2d3748", padding: "16px" }}
              >
                <Space
                  direction="vertical"
                  style={{ width: "100%" }}
                  size="middle"
                >
                  <div>
                    <Text style={{ color: "white", fontSize: "12px" }}>
                      This patient information, please refer to patient safety
                      information in the separate pamphlet. Only provide only
                      information under bioavority is modified records may
                      appear directly in the exam pane.
                    </Text>
                  </div>

                  <div>
                    <Text style={{ color: "white" }}>* Preg./Mob:</Text>
                    <Select
                      defaultValue="NONE"
                      style={{ width: "100%", marginTop: "4px" }}
                      className="dark-select"
                    >
                      <Option value="NONE">NONE</Option>
                      <Option value="YES">YES</Option>
                      <Option value="NO">NO</Option>
                    </Select>
                  </div>

                  <div>
                    <Text style={{ color: "white" }}>* History:</Text>
                    <Select
                      defaultValue="No Entry"
                      style={{ width: "100%", marginTop: "4px" }}
                      className="dark-select"
                    >
                      <Option value="No Entry">No Entry</Option>
                      <Option value="History Available">
                        History Available
                      </Option>
                    </Select>
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>
        </Content>

        {/* Right Sidebar */}
        <Sider
          width={280}
          style={{ backgroundColor: "#2d3748" }}
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div style={{ padding: "16px" }}>
            {/* Status Header */}
            <div
              style={{
                backgroundColor: "#1a202c",
                padding: "8px 12px",
                marginBottom: "16px",
                borderRadius: "4px",
              }}
            >
              <Text style={{ color: "white", fontSize: "12px" }}>
                Reset Download TPS was successful.
              </Text>
            </div>

            {/* Control Buttons */}
            <Space
              direction="vertical"
              style={{ width: "100%", marginBottom: "16px" }}
            >
              <Row gutter={8}>
                <Col span={12}>
                  <Button
                    size="small"
                    style={{
                      width: "100%",
                      backgroundColor: "#4a5568",
                      borderColor: "#718096",
                      color: "white",
                    }}
                  >
                    PulseLayer
                  </Button>
                </Col>
                <Col span={12}>
                  <Button
                    size="small"
                    style={{
                      width: "100%",
                      backgroundColor: "#4a5568",
                      borderColor: "#718096",
                      color: "white",
                    }}
                  >
                    Report Output
                  </Button>
                </Col>
              </Row>
              <Button
                size="small"
                style={{
                  width: "100%",
                  backgroundColor: "#4a5568",
                  borderColor: "#718096",
                  color: "white",
                }}
              >
                Ada Wt
              </Button>
            </Space>

            {/* Monitoring Section */}
            <div
              style={{
                backgroundColor: "#1a202c",
                padding: "12px",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            >
              <Space
                direction="vertical"
                style={{ width: "100%" }}
                size="small"
              >
                <Checkbox style={{ color: "white" }}>
                  TB Body Gat, Ct orangi
                </Checkbox>

                <Divider style={{ margin: "8px 0", borderColor: "#4a5568" }} />

                <div>
                  <Text style={{ color: "white", fontSize: "12px" }}>
                    PUPI1
                  </Text>
                  <br />
                  <Text style={{ color: "#a0aec0", fontSize: "11px" }}>
                    Body Average: 5dn
                  </Text>
                </div>

                <div style={{ marginTop: "16px" }}>
                  <Text style={{ color: "white", fontSize: "12px" }}>
                    T Tarc
                  </Text>
                  <br />
                  <Text style={{ color: "#a0aec0", fontSize: "11px" }}>
                    Spat Protocol: 2.3n
                  </Text>
                </div>

                <Checkbox style={{ color: "white", marginTop: "12px" }}>
                  Apply All
                </Checkbox>
              </Space>
            </div>

            {/* SAR Display */}
            <div
              style={{
                backgroundColor: "#1a202c",
                padding: "12px",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: "12px" }}
              >
                SAR Display
              </Text>

              <Space
                direction="vertical"
                style={{ width: "100%", marginTop: "8px" }}
                size="small"
              >
                {monitoringData.map((item, index) => (
                  <Row key={index} justify="space-between">
                    <Col>
                      <Text style={{ color: "white", fontSize: "11px" }}>
                        {item.label}:
                      </Text>
                    </Col>
                    <Col>
                      <Text style={{ color: "white", fontSize: "11px" }}>
                        {item.value} {item.unit}
                      </Text>
                    </Col>
                  </Row>
                ))}
              </Space>
            </div>

            {/* SAR Display (duplicate section as shown in image) */}
            <div
              style={{
                backgroundColor: "#1a202c",
                padding: "12px",
                borderRadius: "4px",
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: "12px" }}
              >
                SAR Display
              </Text>

              <Space
                direction="vertical"
                style={{ width: "100%", marginTop: "8px" }}
                size="small"
              >
                <Row justify="space-between">
                  <Col>
                    <Text style={{ color: "white", fontSize: "11px" }}>
                      Whole Body:
                    </Text>
                  </Col>
                  <Col>
                    <Text style={{ color: "white", fontSize: "11px" }}>
                      Whole Body:
                    </Text>
                  </Col>
                </Row>
                <Row justify="space-between">
                  <Col>
                    <Text style={{ color: "white", fontSize: "11px" }}>
                      Ave Wrng
                    </Text>
                  </Col>
                  <Col>
                    <Text style={{ color: "white", fontSize: "11px" }}>
                      6.70 V
                    </Text>
                  </Col>
                </Row>
                <Row justify="space-between">
                  <Col>
                    <Text style={{ color: "white", fontSize: "11px" }}>
                      Ave Wrng
                    </Text>
                  </Col>
                  <Col>
                    <Text style={{ color: "white", fontSize: "11px" }}>
                      2.00 V
                    </Text>
                  </Col>
                </Row>
                <Row justify="space-between">
                  <Col>
                    <Text style={{ color: "white", fontSize: "11px" }}></Text>
                  </Col>
                  <Col>
                    <Text style={{ color: "white", fontSize: "11px" }}>
                      8.00 V
                    </Text>
                  </Col>
                </Row>
              </Space>
            </div>
          </div>

          {/* Bottom Status */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "#1a202c",
              padding: "8px 16px",
              borderTop: "1px solid #4a5568",
            }}
          >
            <Space>
              <Text style={{ color: "white", fontSize: "12px" }}>9:21 AM</Text>
              <Text style={{ color: "white", fontSize: "12px" }}>June 28</Text>
              <Text style={{ color: "white", fontSize: "12px" }}>⚫ 54%</Text>
            </Space>
          </div>
        </Sider>
      </Layout>
    </Layout>
  );
};

export default PatientRecord;
