/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Static export-friendly; assets are local so no remote loaders needed.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
