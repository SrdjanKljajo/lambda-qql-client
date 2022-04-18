import React, { useState } from 'react'
import { REGISTER_USER } from '../graphQL/mutations'
import { useMutation } from '@apollo/client'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const [registerUser] = useMutation(REGISTER_USER, {
    variables: {
      username,
      email,
      password
    },
    
    onCompleted: ({ registerUser }) => {
      setMessage(registerUser.message)
      setTimeout(() => {
        window.location = '/articles'
      }, 2000)
    } 
  })

  return (
    <Form name="normal_login" className="login-form">
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!'
          }
        ]}
      >
        <Input
          data-test='username'
          prefix={<UserOutlined className="site-form-item-icon" />}
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!'
          }
        ]}
      >
        <Input
          data-test='email'
          prefix={<MailOutlined className="site-form-item-icon" />}
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          }
        ]}
      >
        <Input
          data-test='password'
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value)
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
          disabled={!email || !username || !password}
          data-test='form-button'
          type="primary"
          htmlType="submit"
          className="login-form-button"
          onClick={registerUser}
        >
          Register
        </Button>
        Or <Link to="/login">Login!</Link>
      </Form.Item>
      {message && <h1>{message}</h1>}
    </Form>
  )
}

export default Register
