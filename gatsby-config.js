const path = require("path")

module.exports = {
  flags: {
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
    PARALLEL_QUERY_RUNNING: true,
  },
  siteMetadata: {
    title: `Natural Aroma Products`,
    description: `Manufacturing best quality natural aroma products like essential oils, aroma oils, natural isolates for various uses and industries.`,
    author: `@paritosh`,
    siteUrl: `https://naturalaroma.co`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    // {
    //   resolve: `gatsby-plugin-material-ui`,
    //   options: {
    //     stylesProvider: {
    //       injectFirst: true,
    //     },
    //   },
    // },
    // `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cms`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
      resolve:  `gatsby-plugin-sharp`,
      options: {
        icons: `src/images/Logo.svg`
      }
    },
    {
      resolve: `gatsby-plugin-tawk.to`,
      options: {
        tawkId: "6186c1ef6885f60a50baa12e",
        tawkKey: "04167c6bde4e02134487c0308b9e279ffc81586b",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        common: path.join(__dirname, "src/components/common"),
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#56C035`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
  ],
}
