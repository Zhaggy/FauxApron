import React from "react"
import { Link } from "gatsby"
import logo from "../../static/images/goapron_logo.svg"

const Footer = () => (
  <footer>
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-5"}>
          <div className={"widget__item"}>
            <div className={"logo"}>
              <Link to="/" title={"GoApron"}>
                <img alt={"Logo"} src={logo} />
              </Link>
            </div>

            <div className={"about"}>
              <p>The first automated aircraft parking service.</p>
            </div>
          </div>
        </div>

        <div className={"col-2"}>
          <div className={"widget__item"}>
            <ul className={"links"}>
              <h4>GoApron</h4>
              <ul>
                <li>
                  <Link to="/about" title={"About Us"}>
                    About
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>

        <div className={"col-2"}>
          <div className={"widget__item"}>
            <div className={"links"}>
              <h4>Support</h4>
              <ul>
                <li>
                  <Link to="/contact" title={"Contact Us"}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" title={"Privacy Policy"}>
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" title={"Terms Of Use"}>
                    Terms Of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
