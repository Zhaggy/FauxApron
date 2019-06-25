import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PrivacyPage = () => (
  <Layout defaultHeader={true}>
    <SEO title="Privacy Policy" />
    <div className={"container"}>
      <div className={"content"}>
        <div className={"title"}>
          <h1>Privacy Policy</h1>
        </div>

        <p>Policy here...</p>
      </div>
    </div>
  </Layout>
)

export default PrivacyPage
