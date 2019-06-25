import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TermsPage = () => (
  <Layout defaultHeader={true}>
    <SEO title="Terms Of Use" />
    <div className={"container"}>
      <div className={"content"}>
        <div className={"title"}>
          <h1>Terms Of Use</h1>
        </div>

        <p>
          <strong>Last Updated June 2019</strong>
        </p>

        <h3>
          <strong>1. Agreement to Terms</strong>
        </h3>
        <p>Terms of use go here</p>
      </div>
    </div>
  </Layout>
)

export default TermsPage
