import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Input, Col } from 'antd'
import Loader from './Loader'
import { useGetCryptosQuery } from '../api/bitcoinApi'

const Bitcoins = ({simplified}) => {
    const count = simplified ? 10 : 100
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
    const [cryptos, setCryptos] = useState()
    const [searchCoin, setSearchCoin] = useState('')
    
    useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchCoin));

    setCryptos(filteredData);
  }, [cryptosList, searchCoin]);
    if (isFetching) {
        return <Loader/>
    }
    return (
        <div>
            {!simplified && (
                <div className='search-crypto'>
                <Input placeholder='Search bitcoins.....' onChange={e => setSearchCoin(e.target.value)} />
            </div>
            )}
            <Row gutter={[32, 32]} className='crypto-card-container'>
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
                        <Link to={`/bitcoins/${currency.id}`}>
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
