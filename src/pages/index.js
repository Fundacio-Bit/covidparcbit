import React from "react"

import SEO from "../components/seo"
import useTranslations from "../components/useTranslations"

const IndexPage = () => {
  const { hello } = useTranslations()
  return (
    <>
      <SEO title="COVID-19 ParcBit" />
      <h1>{hello}</h1>
    </>
  )
}

export default IndexPage
