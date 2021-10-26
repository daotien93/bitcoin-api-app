import React, { useEffect, useState} from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, FundOutlined} from '@ant-design/icons'
import icon from  '../images/Dogecoin_Logo.png'

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState(null)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)

        handleResize()
    }, [])
    return (
        <div className='nav-container'>
            <div className="logo-container">
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Bitcoin My App</Link>
                </Typography.Title>
                <Button className='menu-control-container'>
                </Button>
            </div>
            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to='/bitcoins'>Bitcoin</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to='/exchanges'>Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to='/news'>News</Link>
                </Menu.Item>
            </Menu> 
        </div>
    )
}

export default Navbar
