/**
 * title: 添加新设备
 */
import React, { PureComponent } from 'react';
import { Steps } from 'antd';
import { connect } from 'dva';
import NewdeviceStep1 from './components/NewdeviceStep1';
import NewdeviceStep2 from './components/NewdeviceStep2';
import NewdeviceStep3 from './components/NewdeviceStep3';
import styles from './Newdevice.less';

class Newdevice extends PureComponent {
  render() {
    const { title, current } = this.props;
    return (
      <div>
        <Steps current={current}>
          {Object.keys(title).map(item => <Steps.Step key={title[item]} title={title[item]} />)}
        </Steps>
        <div className={styles.stepsContent}>
          {current === 0 && <NewdeviceStep1 />}
          {current === 1 && <NewdeviceStep2 />}
          {current === 2 && <NewdeviceStep3 />}
        </div>
      </div>
    );
  }
}

export default connect(({ newdevice }) => ({
  current: newdevice.current,
  title: newdevice.title,
}))(Newdevice)