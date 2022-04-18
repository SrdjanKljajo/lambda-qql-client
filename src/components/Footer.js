import { UpSquareOutlined } from '@ant-design/icons'
import { Divider, Row } from 'antd'

const Footer = () => {
  const top = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <>
      <Divider orientation="center">Footer</Divider>
      <span>&copy; 2022 Srdjan Kljajo</span>
      <Row justify="end">
        <UpSquareOutlined
          onClick={top}
          style={{ fontSize: '30px', color: '#08c', margin: '10px' }}
        />
      </Row>
    </>
  )
}

export default Footer