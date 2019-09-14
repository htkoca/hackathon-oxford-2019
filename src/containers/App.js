// dependencies
import React from 'react'
import { Route } from 'react-router-dom'

// components
import Header from '../components/Header'
// import Footer from '../components/Footer'

// routes
import CreateProject from './CreateProject'
import CreateList from './CreateList'
import ViewList from './ViewList'
import SearchProducts from './SearchProducts'
import ViewProduct from './ViewProduct'

// react
const App = () => (
  <div>

    <Header/>
    <main className="my-4">
      <Route exact path="/" component={CreateProject} />
      <Route exact path="/CreateList" component={CreateList} />
      <Route exact path="/ViewList" component={ViewList} />
      <Route exact path="/SearchProducts" component={SearchProducts} />
      <Route exact path="/ViewProduct" component={ViewProduct} />
    </main>
    {/* <Footer/> */}

  </div>
)

export default App
