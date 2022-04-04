import React from 'react'
import { Outlet } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Nav from '../../components/Nav';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
            <Nav />
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <Outlet />
                </div>
            </Content>
          <Footer style={{ textAlign: 'center' }}></Footer>
        </Layout>
      </Layout>

    </div>
  )
}

export default AdminLayout