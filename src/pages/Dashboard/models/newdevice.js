export default {
  namespace: 'newdevice',
  state: {
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
  reducers: {
    //Main reducer
    currentChangeHandler(state, { payload }) {
      return {
        ...state,
        current: payload,
      }
    },
    //First page reducer
    toggleFPButton(state, { payload }) {
      return {
        ...state,
        step1: {
          ...state.step1,
          button: payload,
        },
      }
    },
    changeToPinging(state, { payload }) {
      return {
        ...state,
        step1: {
          ...state.step1,
          ...payload,
        },
      }
    },
    responseToState(state, { payload }) {
      return {
        ...state,
        step1: {
          ...state.step1,
          ...payload,
        },
      }
    },
    responseErr(state, { payload }) {
      return {
        ...state,
        step1: {
          ...state.step1,
          pinging: payload,
        },
      }
    },
    //Second page reducer
    submitHandler(state, { payload }) {
      return {
        ...state,
        step2: {
          ...state.step2,
          ...payload,
        }
      }
    },
    //Last page reducer
    resetAllState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    }
  },
}