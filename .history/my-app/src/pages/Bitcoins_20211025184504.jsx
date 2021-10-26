import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Input, Col } from 'antd'

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
        return '....Loading !!!'
    }
    console.log(cryptos)
    return (

        <>
            {!simplified && (
                
            )}
            
        </>
    )
}

export default Bitcoins
