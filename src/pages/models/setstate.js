export default {

  namespace: 'dvaState',

  state: {
    dataList:[
      {
        list1:'a',
        list2:'c',
      }
    ]
},

  subscriptions: {
    setup({ dispatch, history }) {

    },
  },

  effects: {

  },

  reducers: {
    changeState(state, {payload}) {
      return {...state, ...payload}
    }
  },

};