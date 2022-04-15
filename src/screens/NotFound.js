import { Link } from 'react-router-dom'
import { Button } from 'antd'

const NotFound = () => {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: '10rem' }}>
        <div className="col text-center">
          <h1>Oops!</h1>
          <h2 className="my-3">404 Not Found</h2>
          <h4>Sorry, an error has occured, Requested page not found!</h4>
          <Button className="m-4" type="primary">
            <Link to="/">Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound

