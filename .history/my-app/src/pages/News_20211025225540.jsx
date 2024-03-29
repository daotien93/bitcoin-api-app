import React, { useState} from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../api/bitcoinNews'

const { Text, Title} = Typography
const { Option } = Select

const News = ({ simplified }) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 10 : 100 })

    if (!cryptoNews?.value) return '!Loading......'
    return (
        <Row gutter={[24, 24]}>
            {cryptoNews.value.map((news, index) => (
                <Col xs={24} sm={12} lg={8} key={index}>
                    <Card hoverable className='news-card'>
                        <a href={news.url} target='_blank' ref ='noreferrer'>
                            <div className="new-image-container">
                                <Title className='news-title'></Title>
                                </div>
                        </a>
                    </Card>
               </Col>
           ))}
        </Row>
    )
}

export default News
