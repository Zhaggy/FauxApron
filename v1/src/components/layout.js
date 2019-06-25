import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import Footer from "./footer"

const Layout = ({ children, defaultHeader }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          default={defaultHeader || false}
          siteTitle={data.site.siteMetadata.title}
        />
        <main>{children}</main>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
