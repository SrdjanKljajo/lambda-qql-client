import React, { useState } from 'react'
import { LOGIN_USER } from '../graphQL/mutations'
import { useMutation } from '@apollo/client'
import { Form, Input, Button, Checkbox } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate()

  const [login] = useMutation(LOGIN_USER, {
    variables: {
      email,
      password
    },
    onCompleted: ({login}) => {
      navigate('/articles')
    }
  })

  return (
    <Form name="normal_login" className="login-form">
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Password!'
          }
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value)
          }}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!'
          }
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link className="login-form-forgot" to="*">
          Forgot password
        </Link>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          onClick={login}
        >
          Login
        </Button>
        Or <Link to="/register">Register!</Link>
      </Form.Item>
    </Form>
  )
}

export default Login
