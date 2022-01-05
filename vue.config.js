require("dotenv").config();

module.exports = {
  devServer: {
    port: 6002,
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
};
