import React, { Component } from 'react';
import { Divider } from 'antd';
import DetailHeader from "./detailcomponents/DetailHeader";
import DetailCard from './detailcomponents/DetailCard';
import styles from './DevDetail.less';

class DevDetail extends Component {
  render() {
    return (
      <div className={styles.devDetail}>
        <DetailHeader />
        <Divider className={styles.divider} />
        <div className={styles.detailtitle}>
          <h3>Details</h3>
        </div>
        <DetailCard />
      </div>
    )
  }
}

export default DevDetail