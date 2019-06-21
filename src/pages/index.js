import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import mobileThumbnail from "../../static/images/mobileThumbnail.svg"
import paymentsThumbnail from "../../static/images/paymentsThumbnail.svg"
import realtimeThumbnail from "../../static/images/realtimeThumbnail.svg"
import analysisThumbnail from "../../static/images/analysisThumbnail.svg"

const IndexPage = () => {
  let refHow = React.createRef()
  return (
    <Layout>
      <SEO title="GoApron - Aircraft Parking Software" />
      <div className={"primary-feature"}>
        <div className={"splash-title"}>
          <h1>FIRST AUTOMATED AIRCRAFT PARKING SOFTWARE</h1>
        </div>
        <div className={"splash-button"}>
          <button
            onClick={() => {
              console.log("CLICKED")
              refHow.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            See how it works
          </button>
        </div>
      </div>

      <div className={"container"} ref={refHow}>
        <div className={"second-feature"}>
          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6 first"}>
                <div className={"thumbnail"}>
                  <img alt={"Mobile Bookings"} src={mobileThumbnail} />
                </div>
              </div>

              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <h2>Mobile Bookings</h2>
                  <p>
                    Our user-friendly interface allows for a quick 3-step
                    booking process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <h2>Instant Payments</h2>
                  <p>
                    No more waiting 30+ days. GoApron uses automatic payments to
                    eliminate delayed revenue.
                  </p>
                </div>
              </div>

              <div className={"col-6 first"}>
                <div className={"thumbnail"}>
                  <img
                    id={"payments"}
                    alt={"Instant Payments"}
                    src={paymentsThumbnail}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6 first"}>
                <div className={"thumbnail"}>
                  <img alt={"Real-Time Reporting"} src={realtimeThumbnail} />
                </div>
              </div>

              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <h2>Real-Time Reporting</h2>
                  <p>
                    No more manual data entry, no more unorganized data. All of
                    your foundational reporting right at your fingertips.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <h2>Trend Analysis</h2>
                  <p>
                    GoApron collects and reports key data to help you with your
                    everyday decisions.
                  </p>
                </div>
              </div>

              <div className={"col-6 first"}>
                <img alt={"Trend Analysis"} src={analysisThumbnail} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"contact-feature"}>
        <div className="container">
          <h1>Get in Touch</h1>
          <form onSubmit={e => e.preventDefault()}>
            <input className={"input split-2"} type="text" placeholder="Name" />
            <input
              className={"input split-2"}
              type="text"
              placeholder="Organization"
            />
            <input className={"input email"} type="email" placeholder="Email" />
            <textarea
              className={"input message"}
              type="text"
              placeholder="Message"
            />
            <input type="reset" className={"submit"} value="Submit" />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
