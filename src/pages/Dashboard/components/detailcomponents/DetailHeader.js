import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import styles from './DetailHeader.less';

class DetailHeader extends PureComponent {
  render() {
    return (
      <div className={styles.headerbox}>
        <div className={styles.headeritem}>
          <Icon type="windows" theme="filled" style={{ fontSize: 80 }} />
        </div>
        <div className={styles.headeritem}>
          <p style={{ fontSize: 20, fontWeight: 700 }}>Device - 0</p>
          <p>Device from server room</p>
          <p>6 days, 3 hours, 43 minutes</p>
        </div>
      </div>
    )
  }
}

export default DetailHeader