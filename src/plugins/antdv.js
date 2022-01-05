import {
  Button,
  Layout,
  Menu,
  Icon,
  Collapse,
  Avatar,
  Dropdown,
  Divider,
  Modal,
  Tabs,
  Table,
  Popconfirm,
  Select,
  Calendar,
  DatePicker,
  Card,
  Form,
  Row,
  Col,
  Input,
  ConfigProvider,
  Message,
  Tooltip,
} from "ant-design-vue";

export default (app) => {
  const components = {
    Button,
    Layout,
    Menu,
    Icon,
    Collapse,
    Avatar,
    Dropdown,
    Divider,
    Modal,
    Tabs,
    Table,
    Popconfirm,
    Input,
    Calendar,
    Card,
    Form,
    Row,
    Col,
    DatePicker,
    ConfigProvider,
    Select,
    Message,
    Tooltip,
  };

  Object.keys(components).forEach((key) => {
    app.use(components[key]);
  });
};
