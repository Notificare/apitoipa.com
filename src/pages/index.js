import React from "react"
import { injectIntl } from "gatsby-plugin-react-intl"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/heroes/hero"
import HeroData from "../content/home/hero.json"
import WorkshopsData from "../content/home/workshops.json"
import { Col, Container, Row } from "react-bootstrap"
import DynamicForm from "../components/misc/dynamic-form"
import Workshops from "../components/misc/workshops"

const IndexPage = ({ intl }) => (
    <Layout>
        <Seo lang={intl.locale}
             title={intl.formatMessage({ id: "pages.home.title" })}
             description={intl.formatMessage({ id: "pages.home.description" })}
        />
        <Hero content={HeroData[intl.locale]} />
        <Container>
          <Row>
            <Col lg={`6`}>
              <div className={`top-overflow-wrapper`}>
                <Workshops content={WorkshopsData[intl.locale]}/>
              </div>
            </Col>
            <Col lg={`6`}>
              <div className={`top-overflow-wrapper second-col`}>
                <DynamicForm type={`apiToIPAForm`} />
              </div>
            </Col>
          </Row>
        </Container>
    </Layout>
)

export default injectIntl(IndexPage)
