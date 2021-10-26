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
            {cryptoNews.value.map(() => (
               
           ))}
        </Row>
    )
}

export default News
