import { memo, useState, useCallback, useRef } from 'react'
import { Input, Button, Select, Form } from 'antd'
import { useNavigate } from 'react-router'

const defaultValues = {
  userEmail: 'joshua.lee@obigo.com',
  userName: 'joshua',
  meetingNumber: '85007139943',
  passWord: 123,
  role: 1,
}

const MainPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const navigate = useNavigate()
  const formRef = useRef()
  const roleItems = [
    {
      value: 1,
      label: 'host',
    },
    {
      value: 0,
      label: 'attendee',
    },
  ]

  const handleRoleChange = useCallback((value) => {
    console.log(`selected ${value}`)
    formRef.current?.setFieldsValue({ role: value })
  }, [])

  const onFinish = (values) => {
    console.log('Success:', values)
    navigate('/meetings', { state: { config: values } })
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <h1>회의 참여</h1>
      <Form
        ref={formRef}
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
        initialValues={defaultValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Meeting number"
          name="meetingNumber"
          rules={[
            {
              required: true,
              message: 'Please input your meeting number!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="passWord"
          rules={[
            {
              required: true,
              message: 'Please input your password',
            },
          ]}
        >
          <Input.Password
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
        </Form.Item>
        <Form.Item
          label="User name"
          name="userName"
          rules={[
            {
              required: true,
              message: 'Please input your Name',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="E-mail" name="userEmail">
          <Input />
        </Form.Item>
        <Form.Item label="Role" name="role">
          <Select onChange={handleRoleChange} options={roleItems} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default memo(MainPage)
