/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import MdxLink from "./mdxLink"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const LocaleContext = React.createContext()

const Layout = ({ children, pageContext: { locale } }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <LocaleContext.Provider value={{ locale }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 768,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <MDXProvider components={{ a: MdxLink }}>
          <main>{children}</main>
        </MDXProvider>
        <Footer />
      </div>
    </LocaleContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout, LocaleContext }
