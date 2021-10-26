import React, { useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Input, Col } from 'antd'

import { useGetCryptosQuery } from '../api/bitcoinApi'

const Bitcoins = () => {
    const { data: cryptosList, isFetching } = useGetCryptosQuery()
    const [cryptos, setCrytos] = useState(cryptosList?.data?.coins)
    console.log(cryptos)
    return (
        <div>
            <Row gutter={[32, 32]} className='crypto-card-container'>
                {cryptos.map(() => (
                    <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
                        
                    </Col>
                ))}
           </Row>
        </div>
    )
}

export default Bitcoins
