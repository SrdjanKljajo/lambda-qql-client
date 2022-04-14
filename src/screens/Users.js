import { Row, Col, Divider, Button, Card } from 'antd'
import { GET_ALL_USERS } from '../graphQL/queries'
import { DELETE_USER } from '../graphQL/mutations'
import { useQuery, useMutation } from '@apollo/client'

const UsersGQL = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS)
  const [deleteUser] = useMutation(DELETE_USER)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <>
      <h1>Users</h1>
      <Row>
          {data.allUsers.map((user) => (
            <Col lg={8} xl={6} key={user.id}>
              <Card style={{ width: 300, background: 'silver' }}>
                <h2>{user.username}</h2>
                <p>{user.email}</p>
                <hr />
                  <Button
                    type="danger"
                    onClick={() => {
                      deleteUser({
                        variables: { deleteUserId: user.id },
                        onCompleted: () => {
                          window.location.reload()
                        }
                      })
                    }}
                  >
                    Delete
                  </Button>
              </Card>
            </Col>
          ))}
      </Row>
      <Divider />
    </>
  )
}

export default UsersGQL