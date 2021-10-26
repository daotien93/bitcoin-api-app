import React, { useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Input, Col } from 'antd'

import { useGetCryptosQuery } from '../api/bitcoinApi'

const Bitcoins = () => {
    const { data: cryptosList, isFetching } = useGetCryptosQuery()
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
    
    console.log(cryptos)
    return (
        <div>
           lorem ipsum dolor sit amet, consectetur adip
        </div>
    )
}

export default Bitcoins
