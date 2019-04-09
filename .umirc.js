export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      title: {
        defaultTitle: 'Dashboard',
        format: '{current}{separator}{parent}',
        separator: ' | '
      },
      routes: {
        exclude: [
          /models/,
          /components/,
        ]
      }
    }],
  ],
};