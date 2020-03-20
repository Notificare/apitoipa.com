import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/heroes/hero"
import HeroData from "../content/home/hero.json"
import Workshops from "../content/home/workshops.json"
import { Col, Container, Row } from "react-bootstrap"
import DynamicForm from "../components/misc/dynamic-form"
import SimpleCard from "../components/misc/simple-card"

const IndexPage = ({ intl }) => (
    <Layout>
        <SEO lang={intl.locale}
             title={intl.formatMessage({ id: "pages.home.title" })}
             description={intl.formatMessage({ id: "pages.home.description" })}
        />
        <Hero content={HeroData[intl.locale]} />
        <Container>
          <Row>
            <Col lg={`6`}>
              <div className={`top-overflow-wrapper`}>
                {Workshops[intl.locale].workshops.map((item, i) => {

                  return (
                    <Col key={i} lg={12}>
                      <SimpleCard content={item}/>
                    </Col>
                  )

                })}
              </div>
            </Col>
            <Col lg={`6`}>
              <div className={`top-overflow-wrapper`}>
                <DynamicForm type={`apiToIPAForm`} />
              </div>
            </Col>
          </Row>
        </Container>
    </Layout>
)

export default injectIntl(IndexPage)
