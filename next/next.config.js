/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    }
    return config
  },
  webpack(config) {
    config.resolve.extensions.push(".mdx");
    config.module.rules.push({
      test: /\.mdx?/,
      use: [
        {
          loader: "amdx-loader",
          options: {
            amp: true,
          },
        },
      ],
    });
    return config;
  },
}
