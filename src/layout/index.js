import { Component } from 'react';
import { Layout, Icon } from 'antd';
import Logo from '../pages/layouts/logo';
import MenuList from '../pages/layouts/menu';
// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;

class BasicLayout extends Component {
  state = {
    collapsed: false,
    mode: 'inline'
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          width={256}
          style={{ minHeight: '100vh' }}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <Logo />
          <MenuList />
        </Sider>
        <Layout >
          <Header style={{ background: '#fff', padding: 0 }}>
            <span style={{ paddingLeft: '2%', fontSize: '1.4em'}}>
              <Icon 
                onClick= {this.toggle}
                type={this.state.collapsed? 'menu-unfold': 'menu-fold'}
                style={{cursor:'pointer'}}
              />
            </span>
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;