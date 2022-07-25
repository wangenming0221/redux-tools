import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { RegisterApi } from '../request/api';
import logo192 from '../assets/imgs/logo192.png';
import "./less/login.less";

export default function Register() {

    const navigate = useNavigate();

    const onFinish = (values) => {
        const { username, password } = values;
        RegisterApi({
            username,
            password
        }).then(res => {
            if(res.errCode === 0) {
                message.success(res.message)
                setTimeout(() => navigate(-1), 1000);
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

                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: '请确认密码!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('两次密码输入不一致!'));
                            },
                        }),
                        ]}
                    >
                        <Input.Password size='large' prefix={<LockOutlined className="site-form-item-icon" />} placeholder="确认密码"/>
                    </Form.Item>

                    <Form.Item>
                        <Button size='large' type="primary" htmlType="submit" block>注册</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};