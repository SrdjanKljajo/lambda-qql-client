import { useMutation, useQuery } from '@apollo/client'
import { Button, Card, Col, Row } from 'antd'
import { GET_USER } from '../graphQL/queries'
import { DELETE_ARTICLE } from '../graphQL/mutations'

const SingleUser = () => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId: 1 }
  })
  const [deleteArticle] = useMutation(DELETE_ARTICLE)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div className='container'>
      <h1>Single user articles</h1>
      {data.username}
      <Row className='justify-content-around'>
        {data.user.articles.map((article) => (
          <Col lg={8} xl={6} key={article.id}>
            <Card className='m-2' style={{ maxWidth: 300, maxHeight: 400, background: 'azure' }}>
              <h6>{article.title}</h6>
              <hr />
              <p>{article.body}</p>
              <Button
                type="danger"
                onClick={() => {
                  deleteArticle(
                    { variables: { deleteArticleId: article.id } },
                    window.location.reload()
                  )
                }}
              >
                Delete article
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      {data.user.articles.length === 0 && (
        <h1>The user {data.username} has no articles</h1>
      )}
    </div>
  )
}

export default SingleUser
