import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'


export default function Template({ data }) {
  console.log(data)
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark

  return <Layout>
    <div>
      <h1>{frontmatter.title}</h1>
      <h5>{frontmatter.date}</h5>
      <div className="content-container" dangerouslySetInnerHTML={{ __html: html }}>
      </div>
    </div>
  </Layout>
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD. YYYY")
        path
        title
      }
    }
  }
`