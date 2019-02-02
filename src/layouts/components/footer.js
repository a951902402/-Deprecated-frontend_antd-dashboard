import React, { Component } from 'react';
import { Layout } from 'antd';

export default class Footer extends Component {
  render() {
    return (
      <Layout.Footer style={{ textAlign: 'right' }}>Ant Design ©2018 Created by Ant UED</Layout.Footer>
    )
  }
}