import React from 'react';
import { Layout, Input, Avatar, Dropdown, Button, Space } from 'antd';
import type { MenuProps } from 'antd';
import { MenuOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';

import './style.css';
import logo from '../../../assets/logo.png';
import profile from '../../../assets/profile.png';
import collapIcon from '../../../assets/icons/collape.svg';
const { Header } = Layout;

type Props = {
  onToggle?: () => void;
};

const Navbar: React.FC<Props> = ({ onToggle }) => {
  const menuItems: MenuProps['items'] = [
    { key: 'profile', icon: <UserOutlined />, label: 'Profile' },
    { type: 'divider' as const },
    { key: 'logout', icon: <LogoutOutlined />, label: 'Logout' },
  ];

  return (
    <Header className="app-header">
      <div className="header-left">
        <img src={logo} alt="logo" className="header-logo" />
        <div className="header-title">KHEMARAVIDU UNIVERSITY</div>
        <Button type="text" className="menu-btn" onClick={() => onToggle?.()} icon={<img src={collapIcon} alt="collapse" style={{ width: '50px', height: '32px' }} />} />
        <div className="header-center">
          <Input.Search
            placeholder='Search type of command...'
            // enterButton={<SearchOutlined />}
            className='header-search'
          />
        </div>
      </div>

      <div className="header-center">
        {/* <Input.Search
          placeholder='Search type of command...'
          // enterButton={<SearchOutlined />}
          className='header-search'
        /> */}
      </div>

      <div className="header-right">
        <Space align="center">
          <Dropdown menu={{ items: menuItems }} placement="bottomRight">
            <div className='profile'>
              <Avatar src={profile} />
              <span className='profile-name'>Admin</span>
            </div>
          </Dropdown>
        </Space>
      </div>
    </Header>
  );
};

export default Navbar;
