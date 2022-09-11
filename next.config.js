/** @type {import('next').NextConfig} */

const nextConfig = {
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    reactStrictMode: true,
    webpack(config) {
      config.module.rules.push({
        test:/\.svg/,
        use:[{loader: '@svgr/webpack', options: {icon: true}}],
      })
      return config;
    },
  }
  
  module.exports = nextConfig