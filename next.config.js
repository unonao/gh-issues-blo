/** @type {import('next').NextConfig} */

const basePath = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
  : "";

const nextConfig = {
  basePath,
  reactStrictMode: true,
  env: {
    title: "LAIME",
  },
  images: {
    unoptimized: true,
    path: `${basePath}/_next/image`,
  },
  serverRuntimeConfig: { basePath },
};

module.exports = nextConfig;
