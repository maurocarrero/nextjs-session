module.exports = {
  webpack(config) {
    return {
      ...config,
      node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      }
    };
  }
};
