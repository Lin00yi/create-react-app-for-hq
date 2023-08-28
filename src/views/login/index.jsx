
import React from 'react'
// import { BrowserRouter as Router, Route, Link, UseHistory } from 'react-router-dom';
import { Button, Checkbox, Form, Input ,Card} from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css'

const rules = {
  username: [
    {
      required: true,
      message: 'Please input your username!',
    },
  ],
  password: [
    {
      required: true,
      message: 'Please input your password!',
    },
  ],
};
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};



const index=()=> {
  // const history = UseHistory();
  // const handleButtonClick = () => {
  //   // 使用编程式导航，跳转到/about页面
  //   history.push('/home');
  // };
  return (
    <Card>
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={rules.username}
    >
      <Input/>
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={rules.password}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 4,
        span: 16,
      }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 4,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </Card>
  )
}

export default index
