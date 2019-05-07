import React from 'react';
import {
    Layout, Menu, Breadcrumb, Icon,
  } from 'antd';
import { Route, Link } from 'react-router-dom'
import AddProject from './project/AddProject';
import EditProject from './project/EditProject';
import ListProject from './project/ListProject';
import AddModule from './module/AddModule';
import AddDefect from './defect/AddDefect'
import ListDefect from './defect/ListDefect'
import logo from './DefectTrackerLogo.png';
import './Dashboard.css';
  const {
    Header, Content, Footer, Sider,
  } = Layout;
  const SubMenu = Menu.SubMenu;
  
  class Dashboard extends React.Component {
    state = {
      collapsed: false,
    };
  
    onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
    }
  
    render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" ><img src={logo} width='35px'/> <a href="/">Defect Tracker</a></div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Dashboard</span>
            </Menu.Item>
        
            <SubMenu
              key="sub1"
              title={<span><Icon type="project" /><span>Project</span></span>}
            >
              <Menu.Item key="2"><Link to='/project/add'>Add</Link></Menu.Item>
              <Menu.Item key="3"><Link to='/project/list'>List</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="appstore" /><span>Module</span></span>}
            >
              <Menu.Item key="5"><Link to='/module/add'>Add</Link></Menu.Item>
              <Menu.Item key="6">List</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span><Icon type="alert" /><span>Defect</span></span>}
            >
              <Menu.Item key="8"><Link to='/defect/add'>Add</Link></Menu.Item>
              <Menu.Item key="9">List</Menu.Item>
            </SubMenu>
            <Menu.Item key="11">
              <Icon type="setting" />
              <span>Setting</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
          
          <Route path='/project/add' component={AddProject}/>
          <Route path="/project/edit/:id" component={EditProject}/>
          <Route path="/project/list" component={ListProject}/> 

          <Route path='/module/add' component={AddModule} />
          <Route path='/defect/add' component={AddDefect} />
          <Route path='/defect/list' component={ListDefect} />
                    
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Defect Tracker ©2018 Created by SGIC
          </Footer>
        </Layout>
      </Layout>
      );
    }
  }
  
  export default Dashboard;