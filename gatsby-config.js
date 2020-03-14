/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const dotEnv = require('dotenv')

dotEnv.config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: 'Richard Mocák',
  }
  ,
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}