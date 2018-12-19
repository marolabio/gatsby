/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  // Your component that should be rendered for every item in JSON.
  const template = path.resolve(`src/template.js`)

  return graphql(`
    {
      allPropertiesJson {
        edges {
          node {
            page
            property_name
            description
            location
            property_type
            thumb_path
            banner_path
            specs {
              key
              value
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allPropertiesJson.edges.forEach(({ node }) => {
      createPage({
        path: node.page,
        component: template,

        // Send additional data to page from JSON (or query inside template)
        context: {
          path: node.page,
        },
      })
    })
  })
}
