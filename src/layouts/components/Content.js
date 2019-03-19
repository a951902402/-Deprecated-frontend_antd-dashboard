import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import Breadcrumbs from './Breadcrumbs';
import styles from './Content.less';

class Content extends Component {
  render() {
    const { content, collapsed } = this.props
    return (
      <Layout.Content  className={collapsed ? `${styles.content} ${styles.collapse}` : styles.content}>
        <Breadcrumbs />
        <div className={styles.mainContent}>
          {content}
        </div>
      </Layout.Content>
    )
  }
}

export default connect(({ header }) => ({
  collapsed: header.collapsed,
}))(Content);
