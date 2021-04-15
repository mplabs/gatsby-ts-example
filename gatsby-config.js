module.exports = {
  siteMetadata: {
    siteName: 'Using TypeScript Example',
    exampleUrl: 'https://github.com/mplabs/gatsby-ts-example/tree/main'
  },
  plugins: [
    // 'gatsby-plugin-typescript', // optional
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
        omitGoogleFont: true
      }
    }
  ]
}
