
import { useState } from 'react';
import { Space, Table, Button } from 'antd';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width:'60%',
      render: (text) => (
          <>
            <h4>标题</h4>
            <p>{ text }</p>
          </>
      ),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type='primary'>编辑</Button>
          <Button type='primary'>删除</Button>
        </Space>
      ),
    },
  ];

export default function List() {
    const [ data, setData ] = useState([]);

    return (
        <>
            <div>列表</div>
            <div>
                <Table showHeader={false} columns={columns} dataSource={data} />
            </div>
        </>
    )
};