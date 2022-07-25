import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

  const items = [
    {
        label: '列表',
        key: 'list',
        icon: <AppstoreOutlined />,
    },
    {
        label: '编辑',
        key: 'edit',
        icon: <MailOutlined />,
    },
    {
        label: '资料',
        key: 'means',
        icon: <SettingOutlined />,
    },
    {
        label: '权限树',
        key: 'treeList',
        icon: <SettingOutlined />,
    },
  ];

export default function Aside() {
    const navigate = useNavigate();
    const loaction = useLocation();
    const [ defaultKey, setDefaultKey ] = useState('');

    const handleClick = (e) => {
        navigate(`/${e.key}`);
        setDefaultKey(e.key);
    };

    useEffect(() => {
        const path = loaction?.pathname;
        const key = path?.split('/')[1];
        setDefaultKey(key);
      },[]);

    return (
        <Menu
            onClick={handleClick}
            selectedKeys={[defaultKey]}
            defaultOpenKeys={[defaultKey]}
            mode="inline"
            theme="dark"
            items={items}
        />
    )
}