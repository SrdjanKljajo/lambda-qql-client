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
            <Link data-test='home' to="/">Home</Link>
          </Button>,
          <Button key="5">
            <Link data-test='register' to="/register">Register</Link>
          </Button>,
          <Button key="4" danger>
            <Link data-test='login' to="/login">Login</Link>
          </Button>,
          <Button key="7">
            <Link data-test='addArticle' to="/create-article">Create Article</Link>
          </Button>,
          <Button key="3">
            <Link data-test='articles' to="/articles">Articles</Link>
          </Button>,
          <Button key="2">
            <Link data-test='user' to="/user">Single user</Link>
          </Button>,
          <Button key="1" type="primary">
            <Link data-test='users' to="/users">Users</Link>
          </Button>
        ]}
      ></PageHeader>
    </>
  )
}

export default Header