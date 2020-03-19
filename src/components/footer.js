import React from "react";
import {injectIntl, Link} from "gatsby-plugin-intl";
import { Row, Col, Container } from 'react-bootstrap';
import FooterData from "../content/footer.json";
import ImageFluid from "./misc/image-fluid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Footer({ intl, siteTitle, theme }) {
    return (
        <>
            <footer className={`bg-` + theme}>
                <Container>
                    <div className={`shortcuts`}>
                        <Row>
                            <Col lg={9}>
                                <Row>
                                    {FooterData[intl.locale].footer.map((item, i) => {
                                        return(
                                            <Col key={i} lg={3}>
                                                <div className={`footer-title`}>{item.header}</div>
                                                {item.shortcuts.map((shortcut, j) => {
                                                    if (shortcut.target) {
                                                        return(
                                                            <a key={j} href={shortcut.url} className={`footer-link`} target={shortcut.target} rel={`noopener`}>
                                                                {shortcut.label}
                                                            </a>
                                                        )
                                                    } else {
                                                        return(
                                                            <Link key={j} className={`footer-link`} to={shortcut.url}>
                                                                {shortcut.label}
                                                            </Link>
                                                        )
                                                    }
                                                })}
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Col>
                            <Col lg={3}>
                                <div className={`seals`}>
                                    {FooterData[intl.locale].seals.map((seal, i) => {
                                        return(
                                            <div key={i} className={`seal`}>
                                                <ImageFluid alt={seal.alt} filename={seal.image} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className={`social-buttons`}>
                                    <a href={`https://www.linkedin.com/company/notificare-b-v-`} className={`button linkedin`} target={`_blank`} rel={`noopener`}>
                                        <FontAwesomeIcon size="lg" icon={['fab', 'linkedin-in']} />
                                    </a>
                                    <a href={`https://twitter.com/notificare`} className={`button twitter`} target={`_blank`} rel={`noopener`}>
                                        <FontAwesomeIcon size="lg" icon={['fab', 'twitter']} />
                                    </a>
                                    <a href={`https://www.facebook.com/notificare/`} className={`button facebook`} target={`_blank`} rel={`noopener`}>
                                        <FontAwesomeIcon size="lg" icon={['fab', 'facebook-f']} />
                                    </a>
                                    <a href={`https://www.youtube.com/channel/UCO7NeKfzyco9gPaYo0WWltA`} className={`button youtube`} target={`_blank`} rel={`noopener`}>
                                        <FontAwesomeIcon size="lg" icon={['fab', 'youtube']} />
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className={`copyright`}>
                        © 2013 - {new Date().getFullYear()} {intl.formatMessage({id: "components.footer.siteTitle"})}
                        {FooterData[intl.locale].copyright.map((item, i) => {
                            return(
                                <a key={i} className={`copyright-link`} href={item.url} target={`_blank`} rel={`noopener`}>
                                    {item.label}
                                </a>
                            )
                        })}
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default injectIntl(Footer)
