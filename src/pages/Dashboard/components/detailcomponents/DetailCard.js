import React, { PureComponent } from 'react';
import { Card, Avatar, Row, Col } from 'antd';
import { Sparklines, SparklinesCurve, SparklinesSpots } from 'react-sparklines';

class DetailCard extends PureComponent {
  render() {
    return (
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
            <Sparklines data={[0.05, 0.1, 0.05, 0.2, 0.08, 0.15, 0.05, 0.1, 0.05, 0.2, 0.08, 0.15]} width={350} height={60}>
              <SparklinesCurve />
              <SparklinesSpots />
            </Sparklines>
          </Col>
        </Row>
      </Card>
    )
  }
}

export default DetailCard