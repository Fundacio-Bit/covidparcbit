import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

// The normal <a> tag is modified here (so that internal links use gatsby-link/LocalizedLink
// More info:
// https://www.gatsbyjs.org/docs/mdx/customizing-components/
const Page = ({ data: { mdx } }) => (
  <div className="blogpost">
    <h1>{mdx.frontmatter.title}</h1>
    <MDXRenderer>{mdx.body}</MDXRenderer>
  </div>
)

export default Page

export const query = graphql`
  query Page($locale: String!, $title: String!) {
    mdx(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
      }
      body
    }
  }
`
