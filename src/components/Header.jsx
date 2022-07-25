import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CaretDownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Popconfirm } from 'antd';
import { CLEAR_INFO } from '../store/modules/userinfo';
import logo192 from '../assets/imgs/logo192.png';

  export default function Header() {
    const { info } = useSelector(state => state.userinfo);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(CLEAR_INFO());
        navigate('/login');
    };
      
      const menu = (
        <Menu
          items={[
            {
                key: '1',
                label: (
                    <a>
                        修改资料
                    </a>
                ),
            },
            {
                type: 'divider',
            },
            {
                key: '2',
                label: (
                  <Popconfirm
                    title="确定退出?"
                    onConfirm={()=> {logout()}}
                    okText="确定"
                    cancelText="取消"
                  >
                    <a>
                      退出登录
                    </a>
                  </Popconfirm>  
                ),
            },
          ]}
        />
      );
      

    return(
      <header>
        <img src={logo192} alt=""  className='logo' />
        <div className='right'>
            <Dropdown overlay={menu}>
                <a className='my-antd-link' onClick={(e) => e.preventDefault()}>
                <Space>
                    <img className='headerImg' src={`http://47.93.114.103:6688/${info.avatar}`} alt="" />
                    { info.username }
                    <CaretDownOutlined />
                </Space>
                </a>
            </Dropdown>
        </div>
      </header>
    )
  };