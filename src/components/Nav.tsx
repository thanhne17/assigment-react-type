// import React, { Component } from 'react'
// import {
//     DesktopOutlined,
//     PieChartOutlined,
//     FileOutlined,
//     TeamOutlined,
//     UserOutlined,
//   } from '@ant-design/icons';
// import { Layout, Menu, Breadcrumb } from 'antd';
// import { NavLink, Link } from 'react-router-dom';
// import { getAllRoute } from '../api/route';
// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;



// type Props = {}

// type State = {}

// class Nav extends Component<Props, State> {
//   state = {
//     collapsed: false,
//     course: []
//   };

//   onCollapse = (collapsed: any) => {
//     console.log(collapsed);
//     this.setState({ collapsed });
//   };

//   getCourse = async () => {
//     const {data} = await getAllRoute();
//     console.log(data);
//     this.setState({data})
//   };
//   render() {
//     const { collapsed } = this.state;
//     const { course } = this.state;
//     console.log(course);

//     return (
//         <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
//         <Link className='w-[150px] hover:origin-center' to="/">
//                 <div className="header-with-search__logo-wrapper">
//                   <img className='w-[85px] inline mr-[10px]' src="https://static1.squarespace.com/static/5b60a7583e2d0997aa82bb05/t/5d0f643aa71ad0000103a8d5/1643900387317/" alt="" />

//                 </div>
//             </Link>
//         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
//           <Menu.Item key="1" icon={<PieChartOutlined />}>
//             <NavLink to="/admin">Dashboad</NavLink>
//           </Menu.Item>
//           <Menu.Item key="2" icon={<DesktopOutlined />}>
//             <NavLink to="/admin/posts">Khóa học</NavLink>
//           </Menu.Item>
//           <SubMenu key="sub1" icon={<UserOutlined />} title="Người dùng">
//             <Menu.Item key="3">Tom</Menu.Item>
//             <Menu.Item key="4">Bill</Menu.Item>
//             <Menu.Item key="5">Alex</Menu.Item>
//           </SubMenu>
//           <SubMenu key="sub2" icon={<i className="fa-brands fa-leanpub"></i>} title="Bài học">
//             <Menu.Item key="6">Team 1</Menu.Item>
//             <Menu.Item key="8">Team 2</Menu.Item>
//           </SubMenu>
//         </Menu>
//       </Sider>
//     )
//   }
// }

// export default Nav

import React, { Component, useEffect, useState } from 'react'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import { getAllRoute } from '../api/route';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

type Props = {}

const Nav = (props: Props) => {
  const [course, setCourse] = useState([]);

  useEffect(()=>{
    const getCourse =async () => {
      const {data} = await getAllRoute();
      setCourse(data)
    }
    getCourse()
  }, [])

  return (
    <Sider>
      <Link className='w-[150px] hover:origin-center' to="/">
        <div className="header-with-search__logo-wrapper">
          <img className='w-[85px] inline mr-[10px]' src="https://static1.squarespace.com/static/5b60a7583e2d0997aa82bb05/t/5d0f643aa71ad0000103a8d5/1643900387317/" alt="" />
        </div>
      </Link>
      <Menu  className='sticky top-0' theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <NavLink to="/admin">Dashboad</NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <NavLink to="/admin/posts">Khóa học</NavLink>
        </Menu.Item>
        <Menu.Item key="sub1" icon={<UserOutlined />} title="Người dùng">
          <NavLink to="/admin/user">Người dùng</NavLink>
        </Menu.Item>
        <SubMenu key="sub2" icon={<i className="fa-brands fa-leanpub"></i>} title="Bài học">
          {course?.map((Element, index)=>{
            return (
              <Menu.Item key={index + 6}>
                <NavLink to={`video/${Element?.slug}`}>{Element?.title}</NavLink>
              </Menu.Item>
            )
          })}
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default Nav