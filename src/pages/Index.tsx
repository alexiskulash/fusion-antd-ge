import {
  Button,
  Card,
  Space,
  Typography,
  Spin,
  Row,
  Col,
  Divider,
  Tag,
  Avatar,
  Badge,
  Input,
  Select,
  DatePicker,
  Switch,
  Slider,
  Rate,
  Progress,
  Alert,
  Tooltip,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  StarOutlined,
  HeartOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

const Index = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header Section */}
        <Card style={{ marginBottom: "24px" }}>
          <div style={{ textAlign: "center" }}>
            <Avatar
              size={64}
              icon={<UserOutlined />}
              style={{ marginBottom: "16px" }}
            />
            <Title level={2}>
              <Spin
                indicator={
                  <StarOutlined spin style={{ fontSize: 24, marginRight: 8 }} />
                }
              />
              Welcome to Ant Design
            </Title>
            <Paragraph>
              Your app is now powered by Ant Design - the world's second most
              popular React UI library.
            </Paragraph>
            <Space>
              <Tag color="blue">React</Tag>
              <Tag color="volcano">TypeScript</Tag>
              <Tag color="green">Ant Design</Tag>
              <Tag color="orange">Vite</Tag>
            </Space>
          </div>
        </Card>

        {/* Component Showcase */}
        <Row gutter={[16, 16]}>
          {/* Form Components */}
          <Col xs={24} md={12} lg={8}>
            <Card title="Form Components" extra={<Badge count={5} />}>
              <Space direction="vertical" style={{ width: "100%" }}>
                <Input
                  placeholder="Enter your name"
                  prefix={<UserOutlined />}
                />
                <Input
                  placeholder="Enter your email"
                  prefix={<MailOutlined />}
                />
                <Select defaultValue="option1" style={{ width: "100%" }}>
                  <Option value="option1">Option 1</Option>
                  <Option value="option2">Option 2</Option>
                  <Option value="option3">Option 3</Option>
                </Select>
                <DatePicker style={{ width: "100%" }} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text>Enable notifications</Text>
                  <Switch defaultChecked />
                </div>
              </Space>
            </Card>
          </Col>

          {/* Interactive Components */}
          <Col xs={24} md={12} lg={8}>
            <Card
              title="Interactive Elements"
              extra={<HeartOutlined style={{ color: "#ff4d4f" }} />}
            >
              <Space direction="vertical" style={{ width: "100%" }}>
                <div>
                  <Text>Rating:</Text>
                  <Rate defaultValue={4} />
                </div>
                <div>
                  <Text>Volume:</Text>
                  <Slider defaultValue={30} />
                </div>
                <div>
                  <Text>Progress:</Text>
                  <Progress percent={75} status="active" />
                </div>
                <Space>
                  <Button type="primary" icon={<SearchOutlined />}>
                    Search
                  </Button>
                  <Tooltip title="This is a tooltip">
                    <Button icon={<HomeOutlined />}>Home</Button>
                  </Tooltip>
                </Space>
              </Space>
            </Card>
          </Col>

          {/* Display Components */}
          <Col xs={24} md={12} lg={8}>
            <Card title="Display Elements">
              <Space direction="vertical" style={{ width: "100%" }}>
                <Alert
                  message="Success Tips"
                  description="Detailed description and advice about successful copywriting."
                  type="success"
                  showIcon
                />
                <div>
                  <Badge count={99} overflowCount={99}>
                    <Avatar
                      shape="square"
                      size="large"
                      icon={<PhoneOutlined />}
                    />
                  </Badge>
                </div>
                <Divider>Statistics</Divider>
                <div style={{ textAlign: "center" }}>
                  <Title level={3} style={{ margin: "8px 0" }}>
                    2,048
                  </Title>
                  <Text type="secondary">Total Users</Text>
                </div>
              </Space>
            </Card>
          </Col>
        </Row>

        {/* Footer */}
        <Card style={{ marginTop: "24px", textAlign: "center" }}>
          <Paragraph>
            <Text type="secondary">
              Built with ❤️ using Ant Design. Explore the{" "}
              <Text code>components</Text> to build amazing interfaces.
            </Text>
          </Paragraph>
        </Card>
      </div>
    </div>
  );
};

export default Index;
