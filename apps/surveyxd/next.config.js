const withPlugins = require("next-compose-plugins")
const withTM = require("next-transpile-modules")

// verifyEnv()

const modules = ["@msrvida/sanddance-react"]
const plugins = [withTM(modules)]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}

const config = withPlugins(plugins, nextConfig)

module.exports = config
