import React from 'react'
import './App.css'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar } from './components'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <div className='app'>
      <div className="navbar">
          <Navbar />
      </div>
      <div className="main">
           <Layout>
              <div className="routes">
                   <Switch>
                     <Route exact path='/'>
                        <Homepage />
                    </Route>
                    <Route exact path='/exchanges'>
                        <Homepage />
                      </Route>
                  </Switch>
              </div>
          </Layout>
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default App
