import React, {useState} from 'react'
import {Switch, Route} from "react-router"

import {Home, Navbar} from '../main/index'
import About from '../main/about'
import Contact from '../main/contact'
import Editor from '../main/editor'
import Login from '../main/login'

import ProtectedRoute from './protectedroute'

import {AuthProvider} from './authcontext'

const Routes = () => {
  const [user, setUser] = useState(false)
  const handleLogin = e => {
    e.preventDefault()
    console.log(user)
    setUser(true)
  }

  const handleLogout = e => {
    e.preventDefault()
    setUser(false)
  }
  return (
    <>
    <AuthProvider>

    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path = "/contact" component={Contact} />
      <Route exact path = "/login" handleLogin={handleLogin} 
        render={props => <Login {...props} user={user} handleLogin={handleLogin} />} />
      <Route exact path ="/editor" component={Editor} />
      {/* <ProtectedRoute exact path ='/editor' user={user} handleLogout={handleLogout} component={Editor} /> */}
    </Switch>

    </AuthProvider>
    </>
  )
}

export default Routes