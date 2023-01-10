module.exports = {
  devServer: {
    proxy: {
      '/dev/**': {
        pathRewrite: { '^/dev': '' },
        target: process.env.REACT_APP_API_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
