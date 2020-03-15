const path = require('path')
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./src/content/config.json', 'utf-8'))

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const softwareTemplate = path.resolve('src/templates/softwareTemplate.js')
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date]}
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQl query.`)
    return
  }

  console.log('[createPage] config', config)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const page = {
      path: node.frontmatter.path,
      component: softwareTemplate,
      context: {},
    }
    console.log('[createPage]', page)
    createPage(page)
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      ...config,
    },
  })
}