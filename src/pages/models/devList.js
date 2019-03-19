export default {
  namespace: 'devList',
  state: {
    listData: [
      {
        id: 0,
        title: `DESKTOP-DI3SA9K`,
        icon: 'desktop',
        platform: 'windows',
        content: '6 days, 3 hours, 43 minutes',
      },
      {
        id: 1,
        title: `Linux-Control`,
        icon: 'desktop',
        platform: 'linux',
        content: '14 days, 5 hours, 3 minutes',
      },
      {
        id: 2,
        title: `SH-ISR-4331-1F-22`,
        icon: 'hdd',
        platform: 'cisco',
        content: '45 days, 15 hours, 28 minutes',
      },
      {
        id: 3,
        title: `SH-ISR-4331-1F-23`,
        icon: 'hdd',
        platform: 'cisco',
        content: '45 days, 15 hours, 34 minutes',
      },
      {
        id: 4,
        title: `SH-HW-S7706-4B-21`,
        icon: 'hdd',
        platform: 'huawei',
        content: '20 days, 1 hours, 3 minutes',
      },
    ],
    listDataID: 0,
  },
  reducers: {
    onSelectItem(state, { payload }) {
      return {
        ...state,
        listDataID: payload,
      }
    },
  },
}