import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from  '../images/Dogecoin_Logo.png'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className="logo-container">
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Bitcoin New's Today</Link>
                </Typography.Title>
                <Button className='menu-control-container'>
                </Button>
            </div>
            <Menu>
                
            </Menu>
        </div>
    )
}

export default Navbar
