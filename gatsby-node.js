const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const softwareTemplate = path.resolve('src/templates/softwareTemplate.js');

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
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQl query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    const page = {
      path: node.frontmatter.path,
      component: softwareTemplate,
      context: {},
    }
    console.log('[createPage]', page);
    createPage(page);
  });
}