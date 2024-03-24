import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["crepdogcrew.com"],
  },
  experimental: {
    serverActions: true,
  },
};

export default withNextVideo(nextConfig);
