import React, { PureComponent } from 'react';
import { Menu, Icon } from 'antd';
import Link from 'umi/link';
import { connect } from 'dva';

class Menulist extends PureComponent {
  render() {
    const { submenus } = this.props
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
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
        {menu}
      </Menu>
    )
  }
}

export default connect(({ urlRouter }) => ({
  submenus: urlRouter.submenus,
}))(Menulist)