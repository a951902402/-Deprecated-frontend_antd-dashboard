import { List, Avatar, Icon } from 'antd';
import React, { PureComponent } from 'react';
import styles from './DevList.less';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    //href: 'http://ant.design',
    title: `Device - ${i}`,
    Icon: 'desktop',
    description: 'Device from server room',
    content: '6 days, 3 hours, 43 minutes',
  });
}

class DevList extends PureComponent {
  render() {
    return (
      <List
        itemLayout="vertical"
        className={styles.list}
        bordered
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
          hideOnSinglePage: true,
          position: 'top',
        }}
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            extra={<Icon type="right" />}
            onClick={() => console.log(`${item.title} has been chosen`)}
            className={styles.listItem}
          >
            <List.Item.Meta
              avatar={<Avatar style={{ backgroundColor: 'lightgrey' }} shape="square" size={64} icon="windows" />}
              title={item.title}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    )
  }
}

export default DevList