import React, { PureComponent, Fragment } from 'react';
import { Select, Col } from 'antd';
import { connect } from 'dva';
import styles from './Selector.less';

const Option = Select.Option

class Selector extends PureComponent {
  render() {
    const { selector } = this.props
    const wholeSelector = Object.keys(selector).map((item) => {
      const options = selector[item]
      const selectorOption = Object.keys(options.data).map((key) => {
        return (
          <Option key={key}>{options.data[key]}</Option>
        )
      })
      return (
        <Col key={item} lg={6} md={12} className={styles.colbox}>
          <p className={styles.selectorBanner} key={`p${item}`}>{options.name}</p>
          <Select style={{ width: 160 }} defaultValue={options.data[0]} key={`select${item}`}>
            {selectorOption}
          </Select>
        </Col>
      )
    })
    return (
      <Fragment>
        {wholeSelector}
      </Fragment>
    )
  }
}

export default connect(({ selector }) => ({
  selector: selector,
}))(Selector)