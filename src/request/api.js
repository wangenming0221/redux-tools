import request from './request';

//注册
export const RegisterApi = (params) => request.post('/api2/manage/register', params);

// 登录
export const LoginApi = (params) => request.post('/api2/manage/login', params);

// 列表数据
export const GetListApi = (params) => request.get('/api2/article', { params })