import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../../components/header'
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
    <Header/>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
