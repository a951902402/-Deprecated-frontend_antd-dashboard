import React, { Component } from 'react';
import { Row, Col, Icon, Typography, Button } from 'antd';
import { connect } from 'dva';
import router from 'umi/router';

const namespace = 'newdevice'

class NewdeviceStep3 extends Component {
  currentHandler = current => {
    const { dispatch } = this.props
    dispatch({
      type: `${namespace}/resetAllState`,
      payload: {
        current: 0,
        title: {
          step1: 'IP地址',
          step2: '基础信息',
          step3: '正在完成',
        },
        step1: {
          forward: '跳过，去填基本信息',
          result: ['Ready to Ping.'],
          lastsuccess: '',
          pingsuccess: false,
          pinging: false,
        },
        step2: {
          ip: '0.0.0.0',
          hostname: 'hostname',
          factory: 'unknown',
          OS: 'unknown',
          forward: '确认提交',
          backward: '上一步',
        },
      },
    })
  }
  finish = current => {
    this.currentHandler(current)
    router.push('/dashboard/monitor');
  }
  addNewdevice = current => {
    this.currentHandler(current)
  }
  render() {
    const { current } = this.props
    return (
      <Row gutter={24} type="flex" justify="center" align="middle">
        <Col lg={4} md={24} style={{ padding: 20 }}>
          <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" style={{ fontSize: '7em' }} />
        </Col>
        <Col lg={14} md={24} style={{ padding: 20 }}>
          <Typography.Title level={2}>新设备信息已录入。</Typography.Title>
          <p>你可以稍后到监控页查看新设备信息</p>
          <Button type="primary" onClick={() => this.finish(current)}>完成，去监控页面</Button>
          <Button onClick={() => this.addNewdevice(current)}>继续添加新设备</Button>
        </Col>
      </Row>
    )
  }
}

export default connect(({ newdevice }) => ({
  current: newdevice.current,
}))(NewdeviceStep3)