import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import MdxLink from "../components/mdxLink"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allFile: { edges },
  },
  pageContext: { locale },
}) => {
  // Hack to filter depending on locale
  const data = edges.find(e => e.node.childMdx.fields.locale === locale)
  return (
    <>
      <SEO title="COVID-19 ParcBit" />
      {edges && (
        <MDXProvider components={{ a: MdxLink }}>
          <main>
            <div className="blogpost">
              <h1>{data.node.childMdx.frontmatter.title}</h1>
              <MDXRenderer>{data.node.childMdx.body}</MDXRenderer>
            </div>
          </main>
        </MDXProvider>
      )}
    </>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage($locale: String!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "data" }
        relativeDirectory: { eq: "home" }
        childMdx: { fields: { locale: { eq: $locale } } }
      }
    ) {
      edges {
        node {
          childMdx {
            frontmatter {
              title
            }
            fields {
              locale
            }
            body
          }
        }
      }
    }
  }
`
