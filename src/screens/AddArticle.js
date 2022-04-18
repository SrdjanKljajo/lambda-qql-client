import React, { useState } from 'react'
import { CREATE_ARTICLE } from '../graphQL/mutations'
import { useMutation } from '@apollo/client'
import { Form, Input, Button} from 'antd'
const { TextArea } = Input;

const AddArticle = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const [createArticle] = useMutation(CREATE_ARTICLE, {
    variables: {
      title,
      body
    },
    onCompleted: () => {
     window.location = '/articles'
    }
  })

  return (
    <Form name="normal_login" className="login-form">
      <Form.Item
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input article title!'
          }
        ]}
      >
        <Input
          data-test='title'
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
      </Form.Item>
      <Form.Item
        name="body"
        rules={[
          {
            required: true,
            message: 'Please input article body!'
          }
        ]}
      >       
        <TextArea rows={4} data-test='body'
          type="text"
          placeholder="Article body"
          onChange={(e) => {
            setBody(e.target.value)
          }} />
      </Form.Item>
      <Form.Item>
        <Button
          data-test='form-button'
          type="primary"
          htmlType="submit"
          className="login-form-button"
          onClick={createArticle}
        >
          Create Article
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddArticle
