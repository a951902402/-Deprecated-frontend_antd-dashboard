export default {
  plugins: [
	['umi-plugin-react', {
		//need config
	}],
  ],
  routes: [
    {
      path: '/helloworld',
      component: './helloworld',
    },
	{
	  path: '/',
	  component: './index',
	},
  ],
};