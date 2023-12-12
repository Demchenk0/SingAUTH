/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
// next.config.js
module.exports = {
    // Інші налаштування...
    webpack: (config) => {
      config.resolve.modules.push(__dirname);
      return config;
    },
  };