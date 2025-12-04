const withLess = require('next-with-less');

module.exports = withLess({
  reactStrictMode: true,
  output: 'export',
  transpilePackages: [
    'antd',
    'rc-queue-anim',
    'rc-scroll-anim',
    'rc-tween-one',
    'rc-util',
    'style-utils',
    'tween-one',
  ],
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
});
