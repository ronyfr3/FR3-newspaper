import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './component/Home'
import Contact from './component/Contact'
import Header from './component/Header'
import Sports from './component/Sports'
import Footer from './component/Footer'
import Articles from './component/Articles'

const App = () => {
  return (
    <Router>
      <div>
        <Header/>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/sports' component={Sports}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/article' component={Articles}/>
        </Switch>
        
        <Footer/>
      </div>
    </Router>
  )
}

export default App
