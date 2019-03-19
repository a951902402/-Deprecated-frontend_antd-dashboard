import React, { Component } from 'react';
import { Divider } from 'antd';
import { connect } from 'dva';
import DetailHeader from "./detailcomponents/DetailHeader";
import DetailCard from './detailcomponents/DetailCard';
import styles from './DevDetail.less';

class DevDetail extends Component {
  render() {
    const { listData, listDataID } = this.props
    return (
      <div className={styles.devDetail}>
        <DetailHeader listData={listData} listDataID={listDataID} />
        <Divider className={styles.divider} />
        <div className={styles.detailtitle}>
          <h3>Details</h3>
        </div>
        <DetailCard />
      </div>
    )
  }
}

export default connect(({ devList }) => ({
  listData: devList.listData,
  listDataID: devList.listDataID,
}))(DevDetail)