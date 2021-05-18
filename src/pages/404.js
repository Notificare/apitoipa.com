import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { injectIntl } from "gatsby-plugin-react-intl"
import Hero from "../components/heroes/hero";

const NotFoundPage = ({ intl }) => (
    <Layout>
        <Seo lang={intl.locale} title={intl.formatMessage({ id: "pages.404.title" })} description={intl.formatMessage({ id: "pages.404.description" })} />
        <Hero content={{text: intl.formatMessage({ id: "pages.404.description" })}}/>
    </Layout>
)

export default injectIntl(NotFoundPage)
