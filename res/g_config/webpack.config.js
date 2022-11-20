export const configWebpack = () => {
  return {
    mode: app.isBuild ? "production" : "development",
    output: {
      filename: "app.min.js"
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: "usage",
                    corejs: "3.6.5"
                  }
                ]
              ]
            }
          }
        }
      ]
    }
  };
};