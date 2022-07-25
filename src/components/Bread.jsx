import { useState, useEffect } from 'react';    
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

export default function Bread() {
    const location = useLocation();
    const [ breadName,setBreadName ] = useState('');

    useEffect(() => {
        switch(location?.pathname) {
            case "/list":
                setBreadName('查看列表')
            break;
            case "/edit":
                setBreadName('文章编辑')
            break;
            case "/means":
                setBreadName('修改资料')
            break;
            case "/treeList":
                setBreadName('查看权限')
            break;
            default:
                break;
        }
    },[ location ]);

    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/">
                <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item>
            <a href={location?.pathname}>{breadName}</a>
            </Breadcrumb.Item>
        </Breadcrumb>
    )
};