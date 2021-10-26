import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../api/bitcoinApi'

const { Title } = Typography
const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery()
    return (
        <div>
            <Title level={2} className='heading'>Bitcoins All The World</Title>
            <Row>
                <Col span={12}><Statistic title='Total Coins' value='5' /></Col>
                <Col span={12}><Statistic title='Total Coins' value='5' /></Col>
                <Col span={12}><Statistic title='Total Coins' value='5' /></Col>
                <Col span={12}><Statistic title='Total Coins'  value='5'/></Col>
                <Col span={12}><Statistic title='Total Coins' value='5' /></Col>
                <Col span={12}><Statistic title='Total Coins'  value='5'/></Col>
            </Row>
        </div>
    )
}

export default Homepage