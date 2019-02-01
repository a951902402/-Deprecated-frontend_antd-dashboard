export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true
    }],
  ],
  routes: [{
    path: '/',
    component: '../layouts',
    routes: [
      {
        path: '/card',
        component: 'Card'
      },
      {
        path: '/',
        component: 'HelloWorld'
      },
      {
        path: '/helloworld',
        component: 'HelloWorld'
      },
      {
        path: '/puzzlecards',
        component: 'puzzlecards'
      },
      {
        path: '/test',
        component: 'test'
      },
      {
        path: '/setstate',
        component: 'setstate'
      },
      {
        path: '/i18n',
        component: 'i18n.example'
      },
      {
        path: '/dashboard',
        routes: [
          { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
          { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
          { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
        ]
      },
    ]
  }],
};