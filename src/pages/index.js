import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/heroes/hero"
import HeroData from "../content/home/hero.json"

const IndexPage = ({ intl }) => (
    <Layout>
        <SEO lang={intl.locale}
             title={intl.formatMessage({ id: "pages.home.title" })}
             description={intl.formatMessage({ id: "pages.home.description" })}
        />
        <Hero content={HeroData[intl.locale]} />
    </Layout>
)

export default injectIntl(IndexPage)
