import React from 'react'
import './App.css'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar } from './components'
import Homepage from './pages/Homepage'
import Exchanges from './pages/Exchanges'
import Bitcoins from './pages/Bitcoins'
import News from './pages/News'
import BitcoinDetail  from './pages/BitcoinDetail'

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
                        <Exchanges />
                    </Route>
                    <Route exact path='/bitcoins'>
                              <Bitcoins />
                    </Route>
                  <Route exact path='/bitcoins:coinId'>
                              <BitcoinDetail />
                    </Route>
                    <Route exact path='/news'>
                        <News />
                    </Route>
                  </Switch>
              </div>
          </Layout>
      </div>
      <div className="footer">
        <Typography.Title>
              Bitcoin <br/>
          </Typography.Title>
      </div>
    </div>
  )
}

export default App
