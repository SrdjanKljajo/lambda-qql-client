import 'antd/dist/antd.min.css'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from './services/graphQL/client'
import Home from './screens/Home'
import NotFound from './screens/NotFound'
import Header from './components/Header'
import Users from './screens/Users'
import User from './screens/User'
import Articles from './screens/Articles'
import Login from './screens/Login'
import Register from './screens/Register'
import AddArticle from './screens/AddArticle'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/user" element={<User />} />
            <Route exact path="/create-article" element={<AddArticle />} />
            <Route exact path="/articles" element={<Articles />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </ApolloProvider>
    </div>
  )
}

export default App
