import Link from 'umi/link';
import { Menu, Icon } from 'antd';
import { Component } from 'react';

// 引入菜单组件
const SubMenu = Menu.SubMenu;

export default class MenuList extends Component {
  render() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
    )
  }
}