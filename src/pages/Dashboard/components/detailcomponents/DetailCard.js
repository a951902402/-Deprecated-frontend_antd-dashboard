import React, { PureComponent, Fragment } from 'react';
import { Card, Avatar, Row, Col } from 'antd';
import { Sparklines, SparklinesCurve, SparklinesSpots } from 'react-sparklines';

class DetailCard extends PureComponent {
  render() {
    return (
      <Fragment>
        <Card>
          <Row style={{ width: '100%' }}>
            <Col lg={8} md={24}>
              <Card.Meta
                avatar={<Avatar shape="square" size={64}>CPU</Avatar>}
                title="CPU占用率"
                description="显示这台设备的CPU使用率，越高代表使用资源越多"
                style={{ width: 240 }}
              />
            </Col>
            <Col lg={14} md={24} offset={2}>
              <Sparklines data={[0.1213, 0.3241, 0.0315, 0.3242, 0.0800, 0.0105, 0.0500, 0.0100, 0.0500, 0.0200, 0.0800, 0.0150]} width={350} height={60}>
                <SparklinesCurve />
                <SparklinesSpots />
              </Sparklines>
            </Col>
          </Row>
        </Card>
        <Card>
          <Row style={{ width: '100%' }}>
            <Col lg={8} md={24}>
              <Card.Meta
                avatar={<Avatar shape="square" size={64}>Memory</Avatar>}
                title="内存占用率"
                description="显示这台设备的内存使用率，越高代表使用资源越多"
                style={{ width: 240 }}
              />
            </Col>
            <Col lg={14} md={24} offset={2}>
              <Sparklines data={[0.5213, 0.5131, 0.5405, 0.5462, 0.43508, 0.4345, 0.5625, 0.66451, 0.50545, 0.5552, 0.555408, 0.5355]} width={350} height={60}>
                <SparklinesCurve />
                <SparklinesSpots />
              </Sparklines>
            </Col>
          </Row>
        </Card>
        <Card>
          <Row style={{ width: '100%' }}>
            <Col lg={8} md={24}>
              <Card.Meta
                avatar={<Avatar shape="square" size={64}>CPU</Avatar>}
                title="硬盘占用率"
                description="显示这台设备的硬盘使用率，越高代表已占用的磁盘空间越大"
                style={{ width: 240 }}
              />
            </Col>
            <Col lg={14} md={24} offset={2}>
              <Sparklines data={[0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.18, 0.18, 0.18 ]} width={350} height={60}>
                <SparklinesCurve />
                <SparklinesSpots />
              </Sparklines>
            </Col>
          </Row>
        </Card>
      </Fragment>
    )
  }
}

export default DetailCard