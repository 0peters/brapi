const withImages = require('next-images');
module.exports = withImages({
  images: {
    domains: ['s3-symbol-logo.tradingview.com'],
  },
});
