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
    <>
      <h1>Single user articles</h1>
      {data.username}
      <Row>
        {data.user.articles.map((article) => (
          <Col lg={12} xl={8} key={article.id}>
            <Card style={{ width: 300, background: 'silver' }}>
              <h2>{article.title}</h2>
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
    </>
  )
}

export default SingleUser
