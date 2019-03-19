import { List, Avatar, Icon } from 'antd';
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from './DevList.less';

const namespace = "devList"

class DevList extends PureComponent {
  onSelectItem = listDataID => {
    const { dispatch } = this.props
    dispatch({
      type: `${namespace}/onSelectItem`,
      payload: listDataID,
    })
  }
  render() {
    const { listData, listDataID } = this.props
    console.log(listDataID)
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
          position: 'top',
        }}
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            id={item.id}
            extra={<Icon type="right" />}
            onClick={() => this.onSelectItem(item.id)}
            className={styles.listItem}
          >
            <List.Item.Meta
              avatar={<Avatar style={{ backgroundColor: 'lightgrey' }} shape="square" size={64} icon="desktop" />}
              title={item.title}
              description={item.platform}
            />
            {item.content}
          </List.Item>
        )}
      />
    )
  }
}

export default connect(({ devList }) => ({
  listData: devList.listData,
  listDataID: devList.listDataID,
}))(DevList)