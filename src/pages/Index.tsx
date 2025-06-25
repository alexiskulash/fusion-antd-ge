import React from "react";
import {
  Layout,
  Card,
  Form,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Checkbox,
  Button,
  Typography,
  Divider,
  Space,
  Row,
  Col,
  Table,
} from "antd";
import {
  SearchOutlined,
  SaveOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { Sider, Content, Header } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const Index = () => {
  const patients = [
    { key: "1", patient: "VidOps", procedure: "4/28/2022, 20:41" },
  ];

  const patientColumns = [
    {
      title: "Patient",
      dataIndex: "patient",
      key: "patient",
    },
    {
      title: "Procedure",
      dataIndex: "procedure",
      key: "procedure",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#2c2c2c" }}>
      <Header
        style={{
          backgroundColor: "#1f1f1f",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>
          Medical Scheduler
        </div>
        <Space>
          <Button icon={<SearchOutlined />} size="small">
            Search by Name, ID, SSN, Description, Proc Code
          </Button>
          <Button type="primary" size="small">
            Patient Registration
          </Button>
          <Button type="default" size="small">
            Program Selection
          </Button>
        </Space>
      </Header>

      <Layout>
        <Sider width={240} style={{ backgroundColor: "#3a3a3a" }}>
          <div style={{ padding: "16px", color: "white" }}>
            <div style={{ marginBottom: "16px" }}>
              <Text style={{ color: "white", fontSize: "14px" }}>Patients</Text>
              <Text
                style={{ color: "white", fontSize: "12px", marginLeft: "8px" }}
              >
                Schedule - 1T Aug @8:05:37 PM
              </Text>
            </div>

            <Table
              dataSource={patients}
              columns={patientColumns}
              size="small"
              pagination={false}
              style={{ backgroundColor: "#4a4a4a" }}
              rowSelection={{
                type: "radio",
                selectedRowKeys: ["1"],
              }}
            />

            <div
              style={{ marginTop: "16px", color: "white", fontSize: "12px" }}
            >
              Waiting for scan instructions.
            </div>
          </div>
        </Sider>

        <Content style={{ padding: "16px", backgroundColor: "#2c2c2c" }}>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Card
                title="VidOps"
                size="small"
                style={{ backgroundColor: "#3a3a3a", marginBottom: "16px" }}
                headStyle={{ color: "white", backgroundColor: "#2a2a2a" }}
                bodyStyle={{ backgroundColor: "#3a3a3a" }}
              >
                <Form layout="vertical" size="small">
                  <Form.Item
                    label={<Text style={{ color: "white" }}>Last Name</Text>}
                  >
                    <Input defaultValue="VidOps" />
                  </Form.Item>
                  <Form.Item
                    label={<Text style={{ color: "white" }}>First Name</Text>}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label={<Text style={{ color: "white" }}>Title</Text>}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label={<Text style={{ color: "white" }}>Suffix</Text>}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label={<Text style={{ color: "white" }}>Middle Name</Text>}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label={<Text style={{ color: "white" }}>Patient ID</Text>}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label={
                      <Text style={{ color: "white" }}>Date of Birth</Text>
                    }
                  >
                    <Row gutter={8}>
                      <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                        <Input placeholder="MM/yyyy" />
                      </Col>
                      <Col span={16}>
                        <DatePicker style={{ width: "100%" }} />
                      </Col>
                    </Row>
                  </Form.Item>
                  <Form.Item
                    label={<Text style={{ color: "white" }}>Age</Text>}
                  >
                    <InputNumber style={{ width: "100%" }} />
                  </Form.Item>
                  <Form.Item
                    label={<Text style={{ color: "white" }}>Sex</Text>}
                  >
                    <Select defaultValue="M">
                      <Option value="M">M</Option>
                      <Option value="F">F</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label={<Text style={{ color: "white" }}>Height</Text>}
                  >
                    <Row gutter={8}>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <InputNumber style={{ width: "100%" }} />
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Select defaultValue="ft">
                          <Option value="ft">ft</Option>
                          <Option value="in">in</Option>
                        </Select>
                      </Col>
                    </Row>
                  </Form.Item>
                  <Form.Item
                    label={<Text style={{ color: "white" }}>Weight</Text>}
                  >
                    <Row gutter={8}>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <InputNumber style={{ width: "100%" }} />
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Select defaultValue="lbs">
                          <Option value="lbs">lbs</Option>
                          <Option value="kg">kg</Option>
                        </Select>
                      </Col>
                    </Row>
                  </Form.Item>
                </Form>
              </Card>
            </Col>

            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Card
                title="Medical Information"
                size="small"
                style={{ backgroundColor: "#3a3a3a", marginBottom: "16px" }}
                headStyle={{ color: "white", backgroundColor: "#2a2a2a" }}
                bodyStyle={{ backgroundColor: "#3a3a3a" }}
              >
                <Form layout="vertical" size="small">
                  <Form.Item
                    label={
                      <Text style={{ color: "white" }}>
                        Admitting Diagnosis
                      </Text>
                    }
                  >
                    <TextArea rows={3} />
                  </Form.Item>
                  <Form.Item
                    label={<Text style={{ color: "white" }}>Procedure</Text>}
                  >
                    <TextArea rows={2} />
                  </Form.Item>
                </Form>

                <Divider style={{ borderColor: "#555", margin: "16px 0" }} />

                <div style={{ marginBottom: "16px" }}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Alerts
                  </Text>
                  <Card
                    size="small"
                    style={{ backgroundColor: "#4a4a4a", marginTop: "8px" }}
                  >
                    <Form.Item
                      label={
                        <Text style={{ color: "white" }}>Medical Alerts</Text>
                      }
                    >
                      <TextArea rows={2} />
                    </Form.Item>
                    <Form.Item
                      label={<Text style={{ color: "white" }}>Allergies</Text>}
                    >
                      <TextArea rows={2} />
                    </Form.Item>
                  </Card>
                </div>

                <Divider style={{ borderColor: "#555", margin: "16px 0" }} />

                <div>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Institution
                  </Text>
                  <Form
                    layout="vertical"
                    size="small"
                    style={{ marginTop: "8px" }}
                  >
                    <Form.Item
                      label={
                        <Text style={{ color: "white" }}>Institution Name</Text>
                      }
                    >
                      <Input defaultValue="UCLA Psyc" />
                    </Form.Item>
                    <Form.Item
                      label={
                        <Text style={{ color: "white" }}>
                          Performing Physician
                        </Text>
                      }
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label={
                        <Text style={{ color: "white" }}>
                          Referring Physician
                        </Text>
                      }
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label={
                        <Text style={{ color: "white" }}>
                          Requesting Physician
                        </Text>
                      }
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label={<Text style={{ color: "white" }}>Operator</Text>}
                    >
                      <Input />
                    </Form.Item>
                  </Form>
                </div>
              </Card>
            </Col>

            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Card
                title="Examination Information"
                size="small"
                style={{ backgroundColor: "#3a3a3a", marginBottom: "16px" }}
                headStyle={{ color: "white", backgroundColor: "#2a2a2a" }}
                bodyStyle={{ backgroundColor: "#3a3a3a" }}
              >
                <Form layout="vertical" size="small">
                  <Form.Item
                    label={
                      <Text style={{ color: "white" }}>Accession Nr.</Text>
                    }
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label={<Text style={{ color: "white" }}>Real Proc ID</Text>}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label={
                      <Text style={{ color: "white" }}>Study Description</Text>
                    }
                  >
                    <Input defaultValue="LEE 35 channel" />
                  </Form.Item>
                  <Form.Item
                    label={
                      <Text style={{ color: "white" }}>Study Comment</Text>
                    }
                  >
                    <TextArea rows={2} />
                  </Form.Item>
                </Form>
              </Card>

              <Card
                title="Program Selection"
                size="small"
                style={{ backgroundColor: "#3a3a3a", marginBottom: "16px" }}
                headStyle={{ color: "white", backgroundColor: "#2a2a2a" }}
                bodyStyle={{ backgroundColor: "#3a3a3a" }}
              >
                <div style={{ marginBottom: "16px" }}>
                  <Text style={{ color: "white" }}>
                    USER - LEE - 35 channel - Any Prog...
                  </Text>
                  <div style={{ marginTop: "8px" }}>
                    <Checkbox style={{ color: "white" }}>
                      Load Program to Queue
                    </Checkbox>
                  </div>
                </div>

                <Divider style={{ borderColor: "#555", margin: "16px 0" }} />

                <div style={{ marginBottom: "16px" }}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    RF Transmit Mode
                  </Text>
                  <Select
                    defaultValue="Brain"
                    style={{ width: "100%", marginTop: "8px" }}
                  >
                    <Option value="Brain">Brain</Option>
                    <Option value="Body">Body</Option>
                    <Option value="Head">Head</Option>
                  </Select>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Body Part and Laterality
                  </Text>
                  <div style={{ marginTop: "8px" }}>
                    <Row gutter={8}>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Select defaultValue="Brain" style={{ width: "100%" }}>
                          <Option value="Brain">Brain</Option>
                          <Option value="Head">Head</Option>
                          <Option value="Spine">Spine</Option>
                        </Select>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Select
                          defaultValue="Unpaired"
                          style={{ width: "100%" }}
                        >
                          <Option value="Unpaired">Unpaired</Option>
                          <Option value="Left">Left</Option>
                          <Option value="Right">Right</Option>
                        </Select>
                      </Col>
                    </Row>
                    <Select
                      defaultValue="Select"
                      style={{ width: "100%", marginTop: "8px" }}
                    >
                      <Option value="Select">Select</Option>
                      <Option value="Option1">Option 1</Option>
                      <Option value="Option2">Option 2</Option>
                    </Select>
                  </div>
                </div>

                <div>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Patient Orientation
                  </Text>
                  <Select
                    defaultValue="Select"
                    style={{ width: "100%", marginTop: "8px" }}
                  >
                    <Option value="Select">Select</Option>
                    <Option value="Supine">Supine</Option>
                    <Option value="Prone">Prone</Option>
                  </Select>
                </div>
              </Card>
            </Col>
          </Row>

          <Card
            style={{ backgroundColor: "#3a3a3a", marginTop: "16px" }}
            bodyStyle={{ backgroundColor: "#3a3a3a" }}
          >
            <Row justify="space-between" align="middle">
              <Col>
                <Text style={{ color: "white" }}>
                  Safety relevant information needs to be valid and confirmed. ★
                  Mandatory Information
                </Text>
              </Col>
              <Col>
                <Row
                  justify="space-between"
                  align="middle"
                  style={{ width: "100%" }}
                >
                  <Col>
                    <Space size="middle">
                      <Button
                        icon={<SaveOutlined />}
                        style={{
                          backgroundColor: "#f5f5f5",
                          borderColor: "#d9d9d9",
                          color: "#000",
                        }}
                      >
                        Save
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "#f5f5f5",
                          borderColor: "#d9d9d9",
                          color: "#000",
                        }}
                      >
                        Cancel
                      </Button>
                      <Button icon={<DeleteOutlined />}>Delete</Button>
                    </Space>
                  </Col>
                  <Col>
                    <Space size="middle">
                      <Button.Group style={{ margin: "0 1.5em 0 2em", justifyContent: "center", alignItems: "flex-start" }}>
                        <Button
                          style={{
                            backgroundColor: "#595959",
                            borderColor: "#595959",
                            color: "white",
                          }}
                        >
                          Local Data
                        </Button>
                        <Button
                          style={{
                            backgroundColor: "#595959",
                            borderColor: "#595959",
                            color: "white",
                          }}
                        >
                          Prior Studies
                        </Button>
                      </Button.Group>
                      <Button
                        type="primary"
                        style={{
                          backgroundColor: "#ff7f00",
                          borderColor: "#ff7f00",
                          boxShadow: "0 2px 0 rgba(255, 127, 0, 0.1)", marginLeft: "15em",
                        }}
                      >
                        Exam
                      </Button>
                    </Space>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div style={{ textAlign: "right", marginTop: "8px" }}>
              <Text style={{ color: "white", fontSize: "12px" }}>
                6:43:11 PM
              </Text>
            </div>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
