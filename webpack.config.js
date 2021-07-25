const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const mode = isProduction ? "production" : "development";
  // const CSSExtract = new ExtractTextPlugin('styles.css');
  if (isProduction) {
    // enable in production only
    plugins.push(new MiniCssExtractPlugin({
        filename: 'index.html'  
    }));
}
  console.log('env', env);
  return {
    mode,
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: [
          !isProduction ? "style-loader" : MiniCssExtractPlugin.loader,
          {
              loader: "css-loader",
              options: {
                  sourceMap: true
              }
          },
          {
              loader: "resolve-url-loader"
          }
      ]
    }
    ]
    },
    plugins: [
      //will automatically inject bundle js into ./dist/index.html
      new MiniCssExtractPlugin({
          filename: 'styles.css',
          linkType: "text/css"  //destination
      })
 ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
};


