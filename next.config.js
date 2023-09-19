/** @type {import('next').NextConfig} */
module.exports = {
    webpack: (config) => {
        let modularizeImports = null;
        config.module.rules.some((rule) =>
          rule.oneOf?.some((oneOf) => {
            modularizeImports =
              oneOf?.use?.options?.nextConfig?.modularizeImports;
            return modularizeImports;
          }),
        );
        if (modularizeImports?.["@headlessui/react"])
          delete modularizeImports["@headlessui/react"];
        return config;
      }, 
    // assetPrefix: 'https://multipurpose-v3.vercel.app',
    images: {
        remotePatterns: [
            { hostname: 'cdn.sanity.io' },
            { hostname: 'source.unsplash.com' },
            { hostname: 'images.unsplash.com' },
        ],
    },
    reactStrictMode: false,
    experimental: {
      appDir: true,
      serverActions: true
    },
    typescript: {
        // Set this to false if you want production builds to abort if there's type errors
        ignoreBuildErrors: true
        // ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
    },
    eslint: {
        /// Set this to false if you want production builds to abort if there's lint errors
        ignoreDuringBuilds: true,
        // ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
    },
}
