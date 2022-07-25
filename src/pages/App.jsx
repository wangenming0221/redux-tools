
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Bread from '../components/Bread';

export default function App() {
  const { Sider, Content } = Layout;

  return (
    <Layout id='app'>
     <Header />
      <Layout>
        <Sider 
        breakpoint="lg"
        collapsedWidth="0"
       >
           <Aside />
        </Sider>
        <Content>
          <div className='container_box'>
            <Bread />
            <Outlet />
          </div>
        </Content>
      </Layout>
      <footer>Respect | Copyright &copy;
        2022 Author 快跑我漏电
      </footer>
    </Layout>
  );
};
