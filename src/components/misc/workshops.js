import React from "react"
import { Col } from "react-bootstrap"
import { injectIntl } from "gatsby-plugin-react-intl";
import SimpleCard from "./simple-card"

function Workshops ({ intl, content }) {
  return(
    <div className={`workshops`}>
      {content.workshops.map((item, i) => {

        return (
          <Col key={i} lg={12}>
            <SimpleCard content={item}/>
          </Col>
        )

      })}
    </div>
  )
}

export default injectIntl(Workshops)
