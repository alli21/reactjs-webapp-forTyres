import React, { useState } from 'react';
import { Layout, Menu, Dropdown, Drawer } from 'antd';
import { DownOutlined,InstagramOutlined,FacebookFilled,WhatsAppOutlined,MenuOutlined, PhoneFilled } from '@ant-design/icons';
import logo from '../../assets/images/logo.png';
import './Navbar.css';



const { Header } = Layout;

function Navbar() {
  const [openMenu,setOpenMenu]=useState(false)
  const handleclose = ()=>{
setOpenMenu(false);
  }
  const handleIconClick =()=>{
setOpenMenu(true);
  }
  const menu = (
    <Menu>
      <Menu.Item key="1">About Us</Menu.Item>
    </Menu>
  );

  return (
    <Header className="main-nav" role="navigation">
      <div className='logo'>
      <img src={logo} alt="Logo" className="logo" />
      </div>
      <Menu theme="light" mode="horizontal" className="nav-list">
    <Menu.Item  key="buy">Buy Tyres</Menu.Item>
    <Menu.Item  key="information">Tyre Information</Menu.Item>
    <Menu.Item  key="contact">Contact Us</Menu.Item>
    <Menu.Item ><Dropdown  overlay={menu} className="dropdown">
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        More <DownOutlined style={{
          fontSize:9,
        }}/>
      </a>
    </Dropdown>
    </Menu.Item>
  </Menu>
     <Drawer className="drawer"open={openMenu} onClose={handleclose} >    <Menu theme="light" mode="vertical" className="vertical-menu" style={{
      border:'none'
     }}>
    <Menu.Item className='vertical-menu-item'  key="buy">Buy Tyres</Menu.Item>
    <Menu.Item className='vertical-menu-item' key="information">Tyre Information</Menu.Item>
    <Menu.Item className='vertical-menu-item' key="contact">Contact Us</Menu.Item>
    <Menu.Item className='vertical-menu-item'><Dropdown  overlay={menu} className="dropdown">
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        More <DownOutlined  style={{
          fontSize:9,
        }}/>
      </a>
    </Dropdown>
    </Menu.Item>
  </Menu></Drawer>
  
      <div className='contact-number'>
        
        <div className='phone-num'><PhoneFilled  className='phone-icon'/><text className='phone-text' >+92 317 712 4240</text></div>
      
        <div className='social-media'>
         <div className='facebook'><FacebookFilled/></div>
         <div className='instagram'><InstagramOutlined/></div>
         <div className='whatsapp'><WhatsAppOutlined/></div>
         <div className='menu-button'><MenuOutlined onClick={handleIconClick} style={{ fontSize:28,}}/></div>
        </div>
      </div>
     
  
    </Header>
  );
}


export default Navbar;