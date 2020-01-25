/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const dotEnv = require("dotenv")

dotEnv.config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "Richard Mocák",
  }
  ,
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `richardmocak-portfolio`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },

  ],
}