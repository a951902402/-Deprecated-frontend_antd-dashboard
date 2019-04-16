export default {
  namespace: 'urlRouter',
  state: {
    routes: {
      '/': '首页',
      '/dashboard': '仪表盘',
      '/dashboard/monitor': '监控页',
      '/dashboard/newdevice': '添加新设备',
      '/example': '测试样例',
      '/example/helloworld': '第一个页面',
      '/example/card': '卡片',
      '/example/i18n': '国际化测试',
      '/example/puzzlecards': '填词',
      '/example/test': '用于测试',
      '/example/axios': '测试跨域接收',
    },
    submenus: [
      {
        link: '/',
        key: 1,
        name: '首页',
        icon: 'read',
      },
      {
        link: 'dashboard',
        key: 2,
        name: '仪表盘',
        icon: 'dashboard',
        children : {
          '/dashboard/monitor': '监控页',
          '/dashboard/newdevice': '添加新设备',
        },
      },
      {
        link: 'example',
        key: 5,
        name: '测试样例',
        icon: 'code',
        children: {
          '/example/card': '卡片',
          '/example/i18n': '国际化测试',
          '/example/puzzlecards': '填词',
          '/example/test': '用于测试',
        },
      },
    ]
  },
}