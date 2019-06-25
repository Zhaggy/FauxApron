import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import logo from "../../static/images/goapron_logo.svg"

class Header extends Component {
  state = {
    headerClass: "default",
  }
  listenScrollEvent = e => {
    let headerClass =
      window.scrollY < window.innerHeight
        ? window.scrollY < 50
          ? "transparent"
          : "transparent hidden"
        : "sticky"
    this.setState({ headerClass })
  }
  componentDidMount() {
    if (this.props.default) return
    this.setState({ headerClass: "transparent" })
    window.addEventListener("scroll", this.listenScrollEvent)
  }
  render() {
    console.log(this.state.headerClass)
    return (
      <header>
        <span className={this.state.headerClass}>
          <div className={"top-menu"}>
            <div className={"logo"}>
              <Link to="/" title={"GoApron"}>
                <img alt={"Logo"} src={logo} />
              </Link>
            </div>
          </div>
        </span>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
