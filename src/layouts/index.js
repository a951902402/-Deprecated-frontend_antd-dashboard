import { Component } from 'react';
import { Layout, Icon } from 'antd';
import Sider from './components/sider';
import Header from './components/header';
// Header, Footer, Sider, Content组件在Layout组件模块下
const { Footer, Content } = Layout;

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider />
        <Layout >
          <Header />
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