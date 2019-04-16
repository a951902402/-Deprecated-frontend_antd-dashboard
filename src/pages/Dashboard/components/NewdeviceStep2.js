import React, { Component } from 'react';
import { Form, Input, Select, Button, Modal } from 'antd';
import { connect } from 'dva';
//import styles from './NewdeviceStep2.less';

const { Option } = Select
const { confirm } = Modal
const namespace = 'newdevice'

class Step2 extends Component {
  ipValidatehandler = (rule, value, callback) => {
    const ipRegCheck = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
    if (!value)
      callback();
    if (ipRegCheck.test(value)) {
      value.match(ipRegCheck);
      if (RegExp.$1 <= 255 && RegExp.$1 >= 0
        && RegExp.$2 <= 255 && RegExp.$2 >= 0
        && RegExp.$3 <= 255 && RegExp.$3 >= 0
        && RegExp.$4 <= 255 && RegExp.$4 >= 0) {
        callback();
      } else {
        callback("输入的地址不在可接受的IP值范围内");
      }
    } else {
      callback("不标准的IP地址");
    }
  }
  showModel = (emptyItem, values, onSubmit) => {
    confirm({
      title: `表单内还有${emptyItem.join('/')}这些项没有填写`,
      content: '信息不完整可能会影响到设备的寻找，确定继续提交？',
      okText: '确定，继续提交',
      cancelText: '取消，继续填写',
      onOk() {
        console.log("继续提交")
        onSubmit(values)
      },
      onCancel() {
        console.log("选择重填")
      },
    })
  }
  backward = current => {
    this.props.backward(current)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let emptyItem = []
        Object.keys(values).map((_) => {
          if (values[_] === undefined) {
            values[_] = 'unknown'
            emptyItem.push(_)
          }
        })
        emptyItem.length != 0 ? this.showModel(emptyItem, values, this.props.onSubmit) : this.props.onSubmit(values)
      }
    });
  }
  render() {
    const { current, step2, backward } = this.props
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        lg: { span: 8 },
        md: { span: 24 },
      },
      wrapperCol: {
        lg: { span: 16 },
        md: { span: 24 },
      },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    }
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item
          label="IP地址"
          hasFeedback
        >
          {getFieldDecorator('ip', {
            rules: [
              { required: true, message: 'IP地址是必填项' },
              { validator: this.ipValidatehandler, },
            ],
            validateTrigger: 'onBlur',
          })(
            <Input size='default' placeholder={step2.ip} style={{ width: 300 }} />
          )}
        </Form.Item>
        <Form.Item
          label="主机名"
          hasFeedback
        >
          {getFieldDecorator('hostname', {
            rules: [
              { max: 64, message: '长度不要超过64个字符' },
            ]
          })(
            <Input size='default' placeholder={step2.hostname} style={{ width: 300 }} />
          )}
        </Form.Item>
        <Form.Item
          label="生产厂商"
        >
          {getFieldDecorator('factory', {
            initialValue: step2.factory
          })(
            <Select
              style={{ width: 300 }}
            >
              <Option value="unknown">未知</Option>
              <Option value="cisco">思科</Option>
              <Option value="huawei">华为</Option>
              <Option value="ibm">IBM</Option>
              <Option value="hp">HP</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item
          label="操作系统"
        >
          {getFieldDecorator('OS', {
            initialValue: step2.OS
          })(
            <Select
              style={{ width: 300 }}
            >
              <Option value="unknown">未知</Option>
              <Option value="windows">微软</Option>
              <Option value="linux">Linux</Option>
              <Option value="unix">Unix</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">{step2.forward}</Button>
          <Button onClick={() => backward(current)} style={{ marginLeft: 10 }}>{step2.backward}</Button>
        </Form.Item>
      </Form>
    )
  }
}

const FromStep2 = Form.create({
  name: 'Step2',
  mapPropsToFields: (props) => {
    return {
      current: Form.createFormField({
        current: props.current
      })
    }
  },
})(Step2)

class NewdeviceStep2 extends Component {
  handleFormSubmit = (values) => {
    const { dispatch, current } = this.props
    dispatch({
      type: `${namespace}/currentChangeHandler`,
      payload: current + 1,
    })
    dispatch({
      type: `${namespace}/submitHandler`,
      payload: values,
    })
  }
  backward = current => {
    const { dispatch } = this.props
    dispatch({
      type: `${namespace}/currentChangeHandler`,
      payload: current - 1,
    })
  }
  render() {
    const { current, step2 } = this.props
    return (
      <FromStep2 current={current} step2={step2} onSubmit={this.handleFormSubmit} backward={this.backward} />
    )
  }
}

export default connect(({ newdevice }) => ({
  current: newdevice.current,
  step2: newdevice.step2,
}))(NewdeviceStep2)