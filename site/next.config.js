/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Sirius3R',
    description: 'Testing Kasm workspace.',
    icon: '/img/logo.svg',
    listUrl: 'https://sirius3r.github.io/kasm-registry/',
    contactUrl: 'https://github.com/sirius3r/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
