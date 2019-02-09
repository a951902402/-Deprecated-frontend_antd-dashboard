import React, { Component } from 'react';
import { Layout } from 'antd';

export default class Footer extends Component {
  render() {
    return (
      <Layout.Footer style={{ textAlign: 'right' }}>
        <p>Dashboard Page ©2018 Created by Lee</p>
        <p>Based on Ant Design</p>
      </Layout.Footer>
    )
  }
}