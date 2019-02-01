import React, { Component } from 'react';
import { Layout, Icon, } from 'antd';
import { connect } from 'dva';

const namespace = 'header';

let collapsed = false;

class Header extends Component {
  render() {
    const { dispatch, state } = this.props
    const CollapseChange = (state) => {
      const collapsed = state[namespace].collapsed;
      return {
        collapsed,
      };
    }
    const onCollapseChange = () => {
      dispatch({
        type: `${namespace}/onCollapseChange`,
        payload: {
          collapsed: !collapsed,
        }
      })
    }

    return (
      <Layout.Header style={{ background: '#fff', padding: 0 }} >
        <span
          style={{ paddingLeft: '2%', fontSize: '1.4em' }}
          onClick={onCollapseChange}
        >
          <Icon
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            style={{ cursor: 'pointer' }}
          />
        </span>
      </Layout.Header>
    )
  }
}

export default connect()(Header);