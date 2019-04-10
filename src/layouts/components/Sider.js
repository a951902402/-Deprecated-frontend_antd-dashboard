import React, { Component } from 'react';
import { Layout } from 'antd';
import Menulist from './Menu';
import Logo from './Logo';
import styles from './Sider.less';
import { connect } from 'dva';
//Define Dva connect namespace
const namespace = 'header';

class Sider extends Component {

  onCollapseChange = collapsed => {
    const { dispatch } = this.props
    dispatch({
      type: `${namespace}/onCollapseChange`,
      payload: collapsed,
    })
  }

  render() {
    const { collapsed } = this.props
    return (
      <Layout.Sider
        className={styles.sider}
        width={256}
        breakpoint="lg"
        //collapsedWidth="0"
        trigger={null}
        collapsible
        collapsed={collapsed}
        onBreakpoint={this.onCollapseChange}
        theme="light"
      >
        <Logo collapsed={collapsed} />
        <Menulist />
      </Layout.Sider>
    );
  }
}

export default connect(({ header }) => ({
  collapsed: header.collapsed,
}))(Sider)