module.exports = {
  siteMetadata: {
    title: `GoApron`,
    description: `GoApron - Aircraft Parking`,
    author: `team`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#021d37`,
        theme_color: `#02af4f`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/images/favicon.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["PT Serif", "Montserrat"],
        },
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "goapron",
      },
    },
  ],
}
