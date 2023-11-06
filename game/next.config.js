const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const MARIO_APP_URL = process.env.NEXT_PUBLIC_SHOP_APP_URL || 'http://localhost:3334';
const LUIGI_APP_URL = process.env.NEXT_PUBLIC_CONTENT_APP_URL || 'http://localhost:3335';

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    mario: `mario@${MARIO_APP_URL}/_next/static/${location}/remoteEntry.js`,
    luigi: `luigi@${LUIGI_APP_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org'],
    unoptimized: true,
  },
  webpack: (config, options) => {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'main',
        remotes: remotes(isServer),
        filename: 'static/chunks/remoteEntry.js',
        exposes: {},
      })
    );
    return config;
  },
};

module.exports = nextConfig;
