const withOffline = require('next-offline');
const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css');
const bundleAnalyzer = require('@zeit/next-bundle-analyzer');

const cssOptions = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
};

const bundleAnalyzerOptions = {
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
};

module.exports = withPlugins([
  [css, cssOptions],
  [bundleAnalyzer, bundleAnalyzerOptions],
  [withOffline],
]);
