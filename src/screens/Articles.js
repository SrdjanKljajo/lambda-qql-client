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
    <div className='container'>
      <h1>Articles</h1>
      <Row className='justify-content-around'>
        {data.allArticles.loading && <p>Loading...</p>}
        {data.allArticles.length === 0 && !loading && (
          <p>No articles available!</p>
        )}
        {error && !loading && <p>{error}</p>}
        {data.allArticles.length > 0 &&
          data.allArticles.map((article) => (
            <Col lg={8} xl={6} key={article.id}>
              <Card data-test='article-card' className='m-1' title={article.title} style={{ height: 400}}>
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
    </div>
  )
}

export default Articles
