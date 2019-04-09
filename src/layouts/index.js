import { PureComponent } from 'react';
import { Layout } from 'antd';
import Sider from './components/Sider';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class BasicLayout extends PureComponent {
  render() {
    const content = this.props.children
    return (
      <Layout>
        <Sider />
        <Layout>
          <Header />
          <Content content={content}/>
          <Footer />
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;