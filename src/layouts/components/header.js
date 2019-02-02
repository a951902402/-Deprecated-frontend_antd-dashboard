import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import { connect } from 'dva';
import styles from './header.less';
//Define Dva connect namespace
const namespace = 'header';
//Define variable collapsed
let collapsed;

const mapStateToProps = (state) => {
  const collapsed = state[namespace].collapsed;
  return {
    collapsed,
  };
};

class Header extends Component {

  render() {
    const { dispatch } = this.props
    const onCollapseChange = () => {
      dispatch({
        type: `${namespace}/onCollapseChange`,
        payload: {
          collapsed: !collapsed,
        }
      })
      //Save current collapse state
      collapsed = !collapsed
    }

    return (
      <Layout.Header className={styles.header} >
        <span
          className={styles.menufold}
          onClick={onCollapseChange}
        >
          <Icon
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            className={styles.icon}
          />
        </span>
      </Layout.Header>
    )
  }
}

export default connect(mapStateToProps)(Header);