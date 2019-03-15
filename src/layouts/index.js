import { PureComponent } from 'react';
import { Layout } from 'antd';
import Sider from './components/Sider';
import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
// Header, Footer, Sider, Content组件在Layout组件模块下
const { Content } = Layout;

class BasicLayout extends PureComponent {
  render() {
    return (
      <Layout>
        <Sider />
        <Layout>
          <Header />
          <Breadcrumbs />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;