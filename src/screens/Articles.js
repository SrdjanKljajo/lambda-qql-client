import { useMutation, useQuery } from '@apollo/client'
import { GET_ALL_ARTICLES } from '../graphQL/queries'
import { DELETE_ARTICLE } from '../graphQL/mutations'
import { Row, Col, Button, Card } from 'antd'

const Articles = () => {
  const { loading, error, data } = useQuery(GET_ALL_ARTICLES)
  const [deleteArticle] = useMutation(DELETE_ARTICLE)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <>
      <h1>Articles</h1>
      <Row>
        {data.allArticles.loading && <p>Loading...</p>}
        {data.allArticles.length === 0 && !loading && (
          <p>No articles available!</p>
        )}
        {error && !loading && <p>{error}</p>}
        {data.allArticles.length > 0 &&
          data.allArticles.map((article) => (
            <Col lg={12} xl={8} key={article.id}>
              <Card title={article.title} style={{ width: 300 }}>
                <h2>Author - {article.user.username}</h2>
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
    </>
  )
}

export default Articles
