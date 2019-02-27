import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';
import LogoImg from '../../../public/logo.svg';
import styles from './sider.less';
import { connect } from 'dva';
// 引入菜单组件
const SubMenu = Menu.SubMenu;

//Define variable collapsed
let collapsed;

const namespace = 'header';

const mapStateToProps = (state) => {
  const collapsed = state[namespace].collapsed;
  return {
    collapsed,
  };
};

class Sider extends Component {
  render() {
    const {
      dispatch,
      isMobile,
    } = this.props

    const onCollapseChange = () => {
      dispatch({
        type: `${namespace}/onCollapseChange`,
        payload: {
          collapsed: !collapsed,
        }
      })
      //Save collapse state current js
      collapsed = !collapsed
    }

    return (
      <Layout.Sider
        className={styles.sider}
        width={256}
        breakpoint="lg"
        //collapsedWidth="0"
        trigger={null}
        collapsible
        collapsed={collapsed}
        onBreakpoint={onCollapseChange}
        theme="light"
      >
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img alt="logo" src={LogoImg} />
            {collapsed ? null : <h1>React</h1>}
          </div>
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/helloworld">
              <Icon type="pie-chart" />
              <span>Helloworld</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
          >
            <Menu.Item key="2"><Link to="/dashboard/analysis">Analysis Page</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/dashboard/monitor">Monitor Page</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/dashboard/workplace">Workplace Page</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="5">
            <Link to="/puzzlecards">
              <Icon type="read" />
              <span>puzzlecards</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    );
  }
}

export default connect(mapStateToProps)(Sider)