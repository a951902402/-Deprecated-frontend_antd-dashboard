import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import styles from './DetailHeader.less';

class DetailHeader extends PureComponent {
  render() {
    const { listData, listDataID } = this.props
    const devData = listData[listDataID]
    return (
      <div className={styles.headerbox}>
        <div className={styles.headeritem}>
          <Icon type={devData.platform} theme="filled" style={{ fontSize: 80 }} />
        </div>
        <div className={styles.headeritem}>
          <p style={{ fontSize: 20, fontWeight: 700 }}>{devData.title}</p>
          <p>{devData.platform}</p>
          <p>{devData.content}</p>
        </div>
      </div>
    )
  }
}

export default DetailHeader