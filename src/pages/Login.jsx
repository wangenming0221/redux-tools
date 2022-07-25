import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginApi } from '../request/api';
import { SET_INFO } from '../store/modules/userinfo';
import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import logo192 from '../assets/imgs/logo192.png';
import "./less/login.less";

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinish = (values) => {
        const { username, password } = values;

        LoginApi({
            username,
            password
        })
        .then(res => {
            if(res.errCode === 0) {
                message.success(res.message)
                // 存储数据
                dispatch(SET_INFO(res.data))
                sessionStorage.setItem('token', res.data['cms-token']);
                // 跳转到跟路径
                setTimeout(() => { navigate('/') },1000);
            } else {
                message.error(res.message)
            }
        });
    };
    

    return (
        <div className='login'>
            <div className='login_box'>
                <img src={logo192} alt="" />
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                    >
                    <Form.Item
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: '请输入用户名',
                        },
                        ]}
                    >
                        <Input size='large' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名"/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: '请输入密码',
                        },
                        ]}
                    >
                        <Input.Password size='large' prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入密码"/>
                    </Form.Item>

                    <Form.Item>
                        <Link to='/register'>
                            还没账号?立即注册
                        </Link>
                    </Form.Item>

                    <Form.Item>
                        <Button size='large' type="primary" htmlType="submit" block>登录</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};