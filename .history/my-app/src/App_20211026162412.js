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
                  <Route exact path='/bitcoins/:coinId'>
                              <BitcoinDetail />
                    </Route>
                    <Route exact path='/news'>
                        <News />
                    </Route>
                  </Switch>
              </div>
          </Layout>
      <div className='footer'>
        <Typography.Title level={5} style={{color: 'white',  textAlign: 'center'}}>
          Bitcoin <br />
          Building by Henry Tien
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/exchanges'>Exchanges</Link>
          <Link to='/news'>News</Link>
          <Link to='/bitcoins'>Bitcoins</Link>
        </Space>
      </div>
      </div>
      </div>
  )
}

export default App
