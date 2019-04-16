/**
 * title: 监控页
 */
import React, { Component, Fragment } from 'react';
import { Row, Col, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import Selector from './components/Selector';
import DevList from './components/DevList';
import DevDetail from './components/DevDetail';
import styles from './Monitor.less';

let localCounter = 0

class Monitor extends Component {
  state = {
    show: true
  }
  toggle = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    return (
      <Fragment>
        <Row gutter={24}>
          <QueueAnim>
            {this.state.show ? [
              <Col lg={24} key={`Motion${++localCounter}`} className={styles.colbox}>
                <Row gutter={24} className={styles.selectorbox}>
                  <Selector />
                  <div className={styles.collapse} onClick={this.toggle}>
                    <Icon type="double-right" />
                  </div>
                </Row>
              </Col>
            ] : [
                <div className={`${styles.collapse} ${styles.collapsed}`} key={`Motion${++localCounter}`} onClick={this.toggle}>
                  <Icon type="double-left" />
                </div>
              ]}
          </QueueAnim>
          <Col xl={8} lg={24}>
            <DevList />
          </Col>
          <Col xl={16} lg={24}>
            <DevDetail />
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default Monitor