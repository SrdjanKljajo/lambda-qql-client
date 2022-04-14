import { Divider} from 'antd'
import { GET_HELLO } from '../graphQL/queries'
import { useQuery} from '@apollo/client'

const UsersGQL = () => {
  const { loading, error, data } = useQuery(GET_HELLO)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <>
      <h1 data-cy='title'>Greating</h1>
       <h3 data-cy='greating' className='mt-5'>{data.hello}</h3>
       <Divider />
       <h2 data-cy='number' className='mt-4'>{data.zdravo}</h2>
      
    </>
  )
}

export default UsersGQL