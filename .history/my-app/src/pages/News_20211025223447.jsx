import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetCryptosQuery } from '../api/bitcoinNews'

const [Text, Title] = Typography
const [Option] = Select

const News = () => {
    const { data: cryptoNews } = useGetCryptosQuery({ newsCategory: 'Cryptocurrency' })
    
    return (
        <div>
           
        </div>
    )
}

export default News
