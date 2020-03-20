import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { injectIntl } from "gatsby-plugin-intl"
import Hero from "../components/heroes/hero";

const NotFoundPage = ({ intl }) => (
    <Layout>
        <SEO lang={intl.locale} title={intl.formatMessage({ id: "pages.404.title" })} description={intl.formatMessage({ id: "pages.404.description" })} />
        <Hero
            theme={`dark`}
            content={{title: intl.formatMessage({ id: "pages.404.title" }), text: intl.formatMessage({ id: "pages.404.description" }), image: intl.formatMessage({ id: "pages.404.image" }), button: {label: intl.formatMessage({ id: "pages.404.button.label" }), url: intl.formatMessage({ id: "pages.404.button.url" })}}}
        />
    </Layout>
)

export default injectIntl(NotFoundPage)
