import 'antd/dist/antd.min.css'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from './services/graphQL/client'
import Home from './screens/Home'
import NotFound from './screens/NotFound'
import Header from './components/Header'

const App = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </div>
  )
}

export default App
