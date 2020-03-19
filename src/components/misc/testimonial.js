import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {injectIntl} from "gatsby-plugin-intl";
import quotes from "../../images/quotes.svg"
import ImageFluid from "./image-fluid";

const Testimonial = ({ intl, content }) => (

    <div className={`standalone-testimonial`}>
        <Row>
            <Col lg={5}>
                <div className={`image`}>
                    <div className={`quotes`}><img src={quotes} alt={``} /></div>
                    <ImageFluid alt={``} filename={content.image} />
                </div>
            </Col>
            <Col lg={7}>
                <div className={`testimonial`}>
                    <div className={`logo`}><ImageFluid alt={``} filename={content.logo} /></div>
                    <div className={`divider`}></div>
                    <div className={`summary`}>{content.summary}</div>
                    <div className={`text`} dangerouslySetInnerHTML={{ __html: content.text }}></div>
                    <div className={`author`}>{content.author}</div>
                    <div className={`role`}>{content.role}</div>
                </div>
            </Col>
        </Row>
    </div>

)

export default injectIntl(Testimonial)
