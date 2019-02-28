export default {
  namespace: 'header',
  state: {
    collapsed: false,
  },
  reducers: {
    onCollapseChange(state, { payload }) {
      return {
        ...state,
        collapsed: payload,
      }
    },
  },
};