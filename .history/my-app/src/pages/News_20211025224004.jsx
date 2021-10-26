import React, { useState} from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetCryptosQuery } from '../api/bitcoinNews'

const { Text, Title} = Typography
const { Option } = Select

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const { data } = useGetCryptosQuery(100)
    const { data: cryptoNews } = useGetCryptosQuery({ newsCategory, count: simplified ? 10 : 100 })
    console.log(cryptoNews)
    return (
        <div>
           
        </div>
    )
}

export default News
