import React, { useState} from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetCryptoNews } from '../api/bitcoinNews'

const { Text, Title} = Typography
const { Option } = Select

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const { data: cryptoNews } = useGetCryptoNews({ newsCategory, count: simplified ? 10 : 100 })
    console.log(cryptoNews)
    return (
        <div>
           
        </div>
    )
}

export default News
