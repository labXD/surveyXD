const withTM = require("next-transpile-modules")
const { withPlugins } = require("next-composed-plugins")

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
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/user/dashboard",
        permanent: true,
      },
    ]
  },
}

const config = withPlugins(nextConfig, plugins)

module.exports = config
