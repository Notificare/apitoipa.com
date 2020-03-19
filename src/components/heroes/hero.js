import React from "react"
import { Row, Col, Container } from 'react-bootstrap'
import { injectIntl } from "gatsby-plugin-intl"
import bottle from "../../images/notificare-bottle.png"
import letters from "../../images/from-api-to-ipa.png"
import logo from "../../images/notificare-logo.svg"

const Hero = ({ intl, content }) => (
    <div className={`hero`}>
        <div className={`clipped-area`}></div>
        <div className={`non-clipped-area`}>
            <Container>
                <Row>
                    <Col xs={6}>
                        <div className={`image`}>
                            <img src={bottle} alt={``} />
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className={`letters`}>
                            <img src={letters} alt={``} />
                        </div>
                        <div className={`logo`}>
                            <img src={logo} alt={``} />
                        </div>
                        <p className={`text`} dangerouslySetInnerHTML={{__html: content.text}}></p>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
)

export default injectIntl(Hero)
