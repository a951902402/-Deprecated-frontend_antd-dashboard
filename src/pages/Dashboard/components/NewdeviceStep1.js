import React, { Component } from 'react';
import { connect } from 'dva';
import axios from 'axios';
import { Button, message, notification, Input, Row, Col } from 'antd';
import styles from './NewdeviceStep1.less';

const namespace = 'newdevice'

class NewdeviceStep1 extends Component {
  openNotificationWithIcon = (pingsuccess) => {
    const type = pingsuccess ? 'success' : 'error'
    const message = pingsuccess ? '连接性验证成功' : '连接性验证失败'
    const description = pingsuccess ? '连接性验证成功，可以进行下一步' : '连接性验证失败，您可能需要检查一下连接的地址是否正确'
    notification[type]({
      message: message,
      description: description,
    });
  };
  toggleFPButton = pingsuccess => {
    const buttonContent = pingsuccess ? '下一步' : '跳过，去填基本信息'
    const { dispatch } = this.props
    dispatch({
      type: `${namespace}/toggleFPButton`,
      payload: buttonContent,
    })
  }
  ping = ip => {
    const { dispatch } = this.props
    dispatch({
      type: `${namespace}/changeToPinging`,
      payload: {
        result: ['Pinging...'],
        pinging: true,
      },
    })
    axios.get(`http://localhost:80/antd-dashboard/ping.php?ip=${ip}`)
      .then(response => {
        const splitResponse = response
        const isPingSuccess = splitResponse.data.pop() === 'true' ? true : false
        dispatch({
          type: `${namespace}/responseToState`,
          payload: {
            result: response.data,
            pingsuccess: isPingSuccess,
            lastsuccess: isPingSuccess ? ip : '',
            pinging: false,
          },
        })
        this.openNotificationWithIcon(isPingSuccess)
        this.toggleFPButton(isPingSuccess)
      })
      .catch(error => {
        console.log(error)
        dispatch({
          type: `${namespace}/responseErr`,
          payload: false,
        })
      })
  }
  forward = current => {
    const { dispatch } = this.props
    dispatch({
      type: `${namespace}/currentChangeHandler`,
      payload: current + 1,
    })
  }
  render() {
    const { step1, current } = this.props
    return (
      <Row gutter={24}>
        <Col xl={12} lg={24}>
          <p className={styles.contentTips}>首先，请输入被管理设备的管理IP地址：</p>
          <Input.Search
            placeholder={step1.lastsuccess}
            enterButton="Ping"
            size="large"
            style={{ width: 400 }}
            onSearch={ip => this.ping(ip)}
            disabled={step1.pinging}
          />
          <p className={styles.contentComment}>我们将通过Ping测试验证目标是否能够连接，这可能会花费一些时间</p>
          <p className={styles.contentComment}>您也可以跳过这一步，然后去完成目标设备信息的填写</p>
        </Col>
        <Col xl={12} lg={24}>
          <div className={styles.contentResult}>
            {step1.result.map((_, index) => (<p key={index}>{_}</p>))}
          </div>
        </Col>
        <Col lg={24}>
          <Button onClick={() => this.forward(current)} style={{ marginTop: 40 }}>{step1.forward}</Button>
        </Col>
      </Row>
    )
  }
}

export default connect(({ newdevice }) => ({
  current: newdevice.current,
  step1: newdevice.step1,
}))(NewdeviceStep1)