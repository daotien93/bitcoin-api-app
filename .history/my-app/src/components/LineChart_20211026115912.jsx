import React from 'react'
import { Line } from 'react-chartjs-2'
import { Col, Row, Typography } from 'antd'

const { Title } = Typography

const LineChart = ({ coinHistory, currentPrice, coinName}) => {
    return (
        <>
            <Row className='chart-header'>
                <Title level={2} className='char-title'>{coinName} Price Chart</Title>
                <Col className='price-container'>
                    
                </Col>
            </Row>
        </>
    )
}

export default LineChart