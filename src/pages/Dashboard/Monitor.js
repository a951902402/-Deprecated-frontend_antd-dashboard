// Monitor.js
import React, { Component, Fragment } from 'react';
import { Row, Col, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import Selector from './components/Selector';
import DevList from './components/DevList';
import DevDetail from './components/DevDetail';
import styles from './Monitor.less';

let localCounter = 0

const selectormap = [
  {
    "Platform": [
      { "0": "All Platform" },
      { "1": "Windows" },
      { "2": "Linux" },
      { "3": "Cisco" },
      { "4": "Huawei" },
      { "5": "H3C" },
      { "6": "Other" },
    ]
  },
  {
    "Tag": [
      { "0": "All Tag" },
      { "1": "DESKTOP" },
      { "2": "Linux" },
      { "3": "Router" },
      { "4": "Firewall" },
    ]
  },
  {
    "Important": [
      { "0": "All Level" },
      { "1": "Not Important" },
      { "2": "Important" },
      { "3": "Very Important" },
    ]
  },
]

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
    const selectors = selectormap.map((item, key) => {
      const itemKey = Object.keys(item)
      return (
        <Col key={key} lg={6} md={12} className={styles.colbox}>
          <Selector selectMapName={itemKey} selectMap={item[itemKey]} />
        </Col>
      )
    })
    return (
      <Fragment>
        <Row gutter={24}>
          <QueueAnim>
            {this.state.show ? [
              <Col lg={24} key={`Motion${++localCounter}`} className={styles.colbox}>
                <Row gutter={24} className={styles.selectorbox}>
                  {selectors}
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