module.exports = {
  // lintOnSave: process.env.NODE_ENV !== 'production',
  transpileDependencies: ["vuetify"],
  //   devServer: {
  //     overlay: {
  //       warnings: true,
  //       errors: true,
  //     },
  //   },
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options => {
        options.compilerOptions = {
          ...(options.compilerOptions || {}),
          isCustomElement: tag => tag.startsWith("amplify-")
        };
        return options;
      });
  }
};
