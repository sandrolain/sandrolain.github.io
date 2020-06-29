module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|css)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // },
    ]
  }
};
