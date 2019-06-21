import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout defaultHeader={true}>
    <SEO title="About" />
    <div className={"container"}>
      <div className={"content"}>
        <div className={"title"}>
          <h1>About</h1>
        </div>

        <p>About us here...</p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
