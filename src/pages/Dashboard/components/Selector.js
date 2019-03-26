import React, { PureComponent } from 'react';
import { Select } from 'antd';
import { connect } from 'dva';
import styles from './Selector.less';

const Option = Select.Option

class Selector extends PureComponent {
  render() {
    const { selectMap, selectMapName } = this.props
    const options = selectMap.map((_, index) => {
      const key = _[index]
      const value = _[index]
      return (
        <Option key={key} value={index}>{value}</Option>
      )
    })
    return (
      <div className={styles.selectorbox}>
        <p className={styles.selectorDes}>{selectMapName} :</p>
        <Select style={{ width: 160 }} defaultValue={0}>
          {options}
        </Select>
      </div>
    )
  }
}

export default connect(({devList}) => ({
  listData: devList.listData,
  listDataID: devList.listDataID
}))(Selector)