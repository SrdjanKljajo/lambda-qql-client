import { PageHeader, Button } from 'antd'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <PageHeader
        onBack={() => window.history.back()}
        title='Srdjan'
        extra={[
          <Button key="6" danger type="text">
            <Link data-cy='home' to="/">Home</Link>
          </Button>,
          <Button key="5">
            <Link to="/register">Register</Link>
          </Button>,
          <Button key="4" danger>
            <Link to="/login">Login</Link>
          </Button>,
          <Button key="3">
            <Link to="/articles">Articles</Link>
          </Button>,
          <Button key="2">
            <Link to="/user">Single user</Link>
          </Button>,
          <Button key="1" type="primary">
            <Link data-cy='users' to="/users">Users</Link>
          </Button>
        ]}
      ></PageHeader>
    </>
  )
}

export default Header