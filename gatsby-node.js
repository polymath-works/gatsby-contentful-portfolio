const path = require("path")
const slash = require("slash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error with contentful data", result.errors)
      }

      const portfolioTemplate = path.resolve("./src/templates/portfolio.js")

      result.data.allContentfulBlogPost.edges.forEach(blogPost => {
        createPage({
          path: `/posts/${blogPost.node.slug}/`,
          component: slash(portfolioTemplate),
          context: {
            slug: blogPost.node.slug,
          },
        })
      })
    })
    .catch(error => console.log("Error with contentful data", error))
}