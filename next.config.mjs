import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["crepdogcrew.com"],
  },
};

export default withNextVideo(nextConfig);
