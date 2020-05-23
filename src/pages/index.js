import React from "react"
import { MDXProvider } from "@mdx-js/react"

import MdxLink from "../components/mdxLink"
import SEO from "../components/seo"
import useTranslations from "../components/useTranslations"

const IndexPage = ({ children }) => {
  const { hello } = useTranslations()
  return (
    <>
      <SEO title="COVID-19 ParcBit" />
      <h1>{hello}</h1>
      <MDXProvider components={{ a: MdxLink }}>
        <main>{children}</main>
      </MDXProvider>
    </>
  )
}

export default IndexPage
