import { Button } from "antd"
import { copyToClipboard } from "../helpers/clipboard"


const Home = () => {
const title = 'Basic Home Title'

  return (
    <>
      <h1 data-test='title' className='home mt-5'>{title}</h1>
      <Button type='dashed' onClick={copyToClipboard(title)}>Copy Title To Clipboard</Button>
    </>
  )
}

export default Home