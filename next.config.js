/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build to static HTML in the out/ folder (needed for GitHub Pages)
  output: 'export',
  // Image optimization needs a running server, so turn it off
  images: {
    unoptimized: true,
  },
  // Repo is "nextjs-blog", so GitHub Pages serves the site under /nextjs-blog
  basePath: '/nextjs-blog',
};

module.exports = nextConfig;
