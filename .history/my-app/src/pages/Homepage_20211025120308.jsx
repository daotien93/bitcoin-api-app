import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography
const Homepage = () => {
    return (
        <div>
            <Title level={2} className='heading'>
                    Bitcoins All The World
            </Title>
            <Row>
                <Col span={12}><Statistic title='Total'/></Col>
            </Row>
        </div>
    )
}

export default Homepage
