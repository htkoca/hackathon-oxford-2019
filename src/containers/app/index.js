// dependencies
import React from 'react'
import { Route } from 'react-router-dom'

// components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// routes
import CreateProject from '../CreateProject'

// react
const App = () => (
  <div>

    <Header/>
    <main className="my-4">
      <Route exact path="/" component={CreateProject} />
    </main>
    {/* <Footer/> */}

  </div>
)

export default App
