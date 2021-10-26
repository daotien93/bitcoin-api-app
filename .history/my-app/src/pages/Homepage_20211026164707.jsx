import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import { useGetCryptosQuery } from '../api/bitcoinApi'
import Bitcoins from './Bitcoins'
import News from './News'

const { Title } = Typography

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10)
    const globalStats = data?.data?.stats;
    if (isFetching) {
        return <Loader/>
    }

    return (
        <div>
          <Title level={2} className="heading">Bitcoin</Title>
            <Row gutter={[32, 32]}>
                 <Col span={12}><Statistic title="Total Bitcoin" value={globalStats.total} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} /></Col>
                <Col span={12}><Statistic title="Total Bitcoin" value={globalStats.total} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Bitcoin In The World</Title>
                <Title level={3} className="show-more"><Link to="/bitcoins">Show more</Link></Title>
            </div>
            <Bitcoins simplified={ true }/>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Bitcoin News</Title>
                <Title level={3}><Link to="/news">Show more</Link></Title>
            </div>
            <News simplified/>
        </div>
    )
}

export default Homepage
