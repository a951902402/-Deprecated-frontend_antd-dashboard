import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import { connect } from 'dva';
import styles from './header.less';
//Define Dva connect namespace
const namespace = 'header';
/*
//Define variable collapsed
let collapsed;

const mapStateToProps = (state) => {
  const collapsed = state[namespace].collapsed;
  return {
    collapsed,
  };
};
*/

class Header extends Component {
  onCollapseChange = collapsed => {
    const { dispatch } = this.props
    dispatch({
      type: `${namespace}/onCollapseChange`,
      payload: collapsed,
    })
    /* 
    //Save collapse state current js
    collapsed = !collapsed
     */
  }

  render() {
    const { collapsed } = this.props
    return (
      <Layout.Header className={styles.header} >
        <div
          className={styles.menufold}
          onClick={() => this.onCollapseChange(!collapsed)}
        >
          <Icon
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            className={styles.icon}
          />
        </div>
        <div className={styles.rightContainer}>
          I'm right.
        </div>
      </Layout.Header>
    )
  }
}

export default connect(({header}) => ({
  collapsed: header.collapsed,
}))(Header);