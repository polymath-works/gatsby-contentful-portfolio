import React from "react"
import { graphql } from "gatsby"

const Portfolio = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{data.blogPost.title}</h1>
      <div>
          <p>{data.blogPost.body}</p>
      </div>
    </div>
  )
}

export default Portfolio

export const pageQuery = graphql`
  query($slug: String!) {
    blogPost: contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      body
    }
  }
`