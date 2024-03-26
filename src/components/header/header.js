import React, { useState } from 'react';
import {BlockOutlined, HomeOutlined} from '@ant-design/icons';
import { Menu } from 'antd';

 const items = [
  {
    label:(<a href="/"  rel="noopener noreferrer">Home</a>),
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label:(<a href="/all"  rel="noopener noreferrer">All Blocks</a>),
    key: 'all',
    icon: <BlockOutlined />,
  },
];
const Header = () => {
  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Header;