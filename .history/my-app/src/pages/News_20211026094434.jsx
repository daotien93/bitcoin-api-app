import React, { useState} from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../api/bitcoinNews'
import { useGetCryptosQuery } from '../api/bitcoinApi'

const { Text, Title} = Typography
const { Option } = Select

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'

const News = ({ simplified }) => {
    const [newsCoin, setNewsCoin] = useState('Cryptocurrency')
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCoin,  count: simplified ? 6 : 12 })
    const { data } = useGetCryptosQuery(100)
    if (!cryptoNews?.value) return '!Loading......'
    console.log(cryptoNews)
    return (
        <Row gutter={[24, 24]}>
            {!simplified && (
                <Col span={24}>
                    <Select
                        showSearch
                        className='select-news'
                        placeholder='Select a news bitcoinNews'
                        optionFilterProp='children'
                        onChange={(value) => console.log(value)}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value='Cryptocurrency'></Option>
                    </Select>
                </Col>
            )}
            {cryptoNews.value.map((news, index) => (
                <Col xs={24} sm={12} lg={8} key={index}>
                    <Card hoverable className='news-card'>
                        <a href={news.url} target='_blank' rel='noreferrer'>
                            <div className="new-image-container">
                                <Title className='news-title' level={4}>{news.name}</Title>
                                <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt={news} />
                            </div>
                            <p>
                                {
                                    news.description > 100 ? `${news.description.substring(0, 100)} ...`
                                    : news.description
                                }
                            </p>
                            <div className="provider-container">
                                <div>
                                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                                        <Text className="provider-name">{news.provider[0]?.name}</Text>
                                        </div>
                                        <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                                </div>
                        </a>
                    </Card>
               </Col>
           ))}
        </Row>
    )
}

export default News
