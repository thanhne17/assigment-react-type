import React, { Component } from 'react'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';
import { NavLink, Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



type Props = {}

type State = {}

class Nav extends Component<Props, State> {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: any) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        <Link className='w-[150px] hover:origin-center' to="/">
                <div className="header-with-search__logo-wrapper">
                  <img className='w-[85px] inline mr-[10px]' src="https://static1.squarespace.com/static/5b60a7583e2d0997aa82bb05/t/5d0f643aa71ad0000103a8d5/1643900387317/" alt="" />

                </div>
            </Link>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <NavLink to="/admin">Dashboad</NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <NavLink to="/admin/posts">Posts</NavLink>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default Nav