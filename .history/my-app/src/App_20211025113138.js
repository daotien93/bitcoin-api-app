import React from 'react'
import './App.css'
import { Switch, Router, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar } from './components'

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
              <Route>
                
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
