import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { injectIntl } from "gatsby-plugin-intl"
import SimpleCTA from "../components/ctas/simple-cta";
import Hero from "../components/heroes/hero";
import {Container} from "react-bootstrap";

const NotFoundPage = ({ intl }) => (
    <Layout>
        <SEO lang={intl.locale} title={intl.formatMessage({ id: "pages.404.title" })} description={intl.formatMessage({ id: "pages.404.description" })} />
        <Hero
            theme={`dark`}
            content={{title: intl.formatMessage({ id: "pages.404.title" }), text: intl.formatMessage({ id: "pages.404.description" }), image: intl.formatMessage({ id: "pages.404.image" }), button: {label: intl.formatMessage({ id: "pages.404.button.label" }), url: intl.formatMessage({ id: "pages.404.button.url" })}}}
        />
        <div className={`mb-5`}>
        <Container>
                <SimpleCTA
                    theme={`secondary`}
                    content={{title: intl.formatMessage({ id: "pages.404.cta.title" }), text: intl.formatMessage({ id: "pages.404.cta.text" }), button: {label: intl.formatMessage({ id: "pages.404.cta.button.label" }), url: intl.formatMessage({ id: "pages.404.cta.button.url" })}}}
                />
        </Container>
        </div>
    </Layout>
)

export default injectIntl(NotFoundPage)
