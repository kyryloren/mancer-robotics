const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  experimental: {
    optimizeCss: true,
    // storyblok preview
    // nextScriptWorkers: process.env.NODE_ENV !== 'development',
    urlImports: ['https://cdn.skypack.dev', 'https://unpkg.com'],
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
    styledComponents: true,
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: process.env.NEXT_PUBLIC_PROTOCOL,
  //       hostname: process.env.NEXT_PUBLIC_STRAPI_HOSTNAME,
  //     },
  //   ],
  // },
  webpack: (config, options) => {
    const { dir } = options

    config.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              memo: true,
              dimensions: false,
              svgoConfig: {
                multipass: true,
                plugins: [
                  'removeDimensions',
                  'removeOffCanvasPaths',
                  'reusePaths',
                  'removeElementsByAttr',
                  'removeStyleElement',
                  'removeScriptElement',
                  'prefixIds',
                  'cleanupIds',
                  {
                    name: 'cleanupNumericValues',
                    params: {
                      floatPrecision: 1,
                    },
                  },
                  {
                    name: 'convertPathData',
                    params: {
                      floatPrecision: 1,
                    },
                  },
                  {
                    name: 'convertTransform',
                    params: {
                      floatPrecision: 1,
                    },
                  },
                  {
                    name: 'cleanupListOfValues',
                    params: {
                      floatPrecision: 1,
                    },
                  },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(graphql|gql)$/,
        include: [dir],
        exclude: /node_modules/,
        use: [
          {
            loader: 'graphql-tag/loader',
          },
        ],
      },
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        use: ['raw-loader', 'glslify-loader'],
      },
    )

    // config.plugins.push(
    //   new DuplicatePackageCheckerPlugin({
    //     // Also show module that is requiring each duplicate package (default: false)
    //     verbose: true,
    //     // Emit errors instead of warnings (default: false)
    //     emitError: true,
    //     // Show help message if duplicate packages are found (default: true)
    //     showHelp: true,
    //     // Warn also if major versions differ (default: true)
    //     strict: false,
    //     /**
    //      * Exclude instances of packages from the results.
    //      * If all instances of a package are excluded, or all instances except one,
    //      * then the package is no longer considered duplicated and won't be emitted as a warning/error.
    //      * @param {Object} instance
    //      * @param {string} instance.name The name of the package
    //      * @param {string} instance.version The version of the package
    //      * @param {string} instance.path Absolute path to the package
    //      * @param {?string} instance.issuer Absolute path to the module that requested the package
    //      * @returns {boolean} true to exclude the instance, false otherwise
    //      */
    //     exclude: (instance) => instance.name === 'fbjs',
    //     // Emit errors (regardless of emitError value) when the specified packages are duplicated (default: [])
    //     alwaysEmitErrorsFor: ['react', 'react-router'],
    //   }),
    // )

    return config
  },
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/_next/static/css/(.*)',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/css',
          },
        ],
      },
    ]
  },
  redirects: async () => {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = () => {
  const plugins = [withBundleAnalyzer]
  return plugins.reduce((acc, plugin) => plugin(acc), {
    ...nextConfig,
  })
}
