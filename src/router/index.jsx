import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Spin } from 'antd';

const App = lazy(() => import('../pages/App'));
const ReduxProduct = lazy(() => import('../pages/ReduxProduct'));
const Login = lazy(() => import('../pages/Login'));
const List = lazy(() => import('../pages/List'));
const Edit = lazy(() => import('../pages/Edit'));
const Register = lazy(() => import('../pages/Register'));
const Means = lazy(() => import('../pages/Means'));
const TreeList = lazy(() => import('../pages/TreeList'));

const BaseRouter = () => {
    
    return (
        <Router>
             <Suspense 
                fallback={
                    <div style={{
                            width:'100%',
                            height:'300px',
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}><Spin />
                    </div>
                }>
                    <Routes>
                        <Route exact path='/' element={sessionStorage.getItem('token') ? <App /> : <Navigate to='/login' />}>
                            <Route path='/list' element={<List />}></Route>
                            <Route path='/edit' element={<Edit />}></Route>
                            <Route path='/means' element={<Means />}></Route>
                            <Route exact path='/treeList' element={<TreeList />}></Route>
                        </Route>
                        <Route exact path='/login' element={<Login />}></Route>
                        <Route path='/register' element={<Register />}></Route>
                        <Route exact path='/reduxproduct' element={<ReduxProduct />}></Route>
                    </Routes>
                </Suspense>
        </Router>
    )
};

export default BaseRouter