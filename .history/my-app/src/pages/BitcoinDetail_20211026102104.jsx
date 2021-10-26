import React, { useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import { Col, Row, Typography, Select } from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons'
// Get data
import { useGetCryptoDetailsQuery } from '../api/bitcoinApi'
const { Title, Text } = Typography
const { Option } = Select

const BitcoinDetail = () => {
    const { coinId } = useParams()
    const [timePeriod, setTimePeriod] = useState('7d')

    return (
        <div>
            Coin {coinId}
        </div>
    )
}

export default BitcoinDetail
