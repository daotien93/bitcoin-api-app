import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Input, Col } from 'antd'

import { useGetCryptosQuery } from '../api/bitcoinApi'

const Bitcoins = ({simplified}) => {
    const count = simplified ? 10 : 100
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
    const [cryptos, setCrytos] = useState(cryptosList?.data?.coins)
    const [searchCoin, setSearchCoin] = useState('')
    useEffect(() => {
        setCrytos(cryptosList?.data?.coins)
        const filteredData = cryptosList?.data?.filter((coin) => coin.name.toLowerCase.includes(searchCoin.toString()))
    })
    if (isFetching) {
        return '....Loading !!!'
    }
    console.log(cryptos)
    return (
        <div>
            <div className='search-crypto'>
                <Input placeholder='Search bitcoins.....' onChange={e => searchCoin(e.target.value)} />
            </div>
            <Row gutter={[32, 32]} className='crypto-card-container'>
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img className="crypto-image" src={currency.iconUrl} />}
                                hoverable
                            >
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}%</p>
                                </Card>
                        </Link>
                    </Col>
                ))}
           </Row>
        </div>
    )
}

export default Bitcoins
