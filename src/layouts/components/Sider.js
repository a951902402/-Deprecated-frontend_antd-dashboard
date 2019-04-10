import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';
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
    const { collapsed, submenus } = this.props
    const menu = submenus.map((items) => {
      if(items.hasOwnProperty('children')) {
        const menuItem = Object.keys(items.children).map((_, index) => {
          return (
            <Menu.Item key={items.key + index}><Link to={_}>{items.children[_]}</Link></Menu.Item>
          )
        })
        return (
          <Menu.SubMenu
            key={items.link}
            title={<span><Icon type={items.icon} /><span>{items.name}</span></span>}
          >
            {menuItem}
          </Menu.SubMenu>
        )
      }
      else {
        return (
          <Menu.Item key={items.key}>
            <Link to={items.link}>
              <Icon type={items.icon} />
              <span>{items.name}</span>
            </Link>
          </Menu.Item>
        )
      }
    })
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
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          {menu}
        </Menu>
      </Layout.Sider>
    );
  }
}

export default connect(({ header, urlRouter }) => ({
  collapsed: header.collapsed,
  submenus: urlRouter.submenus,
}))(Sider)