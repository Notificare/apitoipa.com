import React from "react"
import {Row, Col} from "react-bootstrap";
import { injectIntl, Link } from "gatsby-plugin-intl";
import ImageFluid from "./image-fluid";

const CalloutBlock = ({ intl, theme, content }) => (
    <div className={`callout-block ` + theme}>
        <Row>
            <Col lg={5}>
                {content.image &&
                <div className={`image`}>
                    <ImageFluid alt={``} filename={content.image} />
                </div>
                }
            </Col>
            <Col lg={7}>
                <div className={`callout`}>
                    {content.logo &&
                    <div className={`logo`}>
                        <ImageFluid alt={``} filename={content.logo} />
                    </div>
                    }
                    {content.text &&
                    <div className={`text`} dangerouslySetInnerHTML={{__html: content.text}}></div>
                    }
                    {content.author &&
                    <div className={`author`}>
                        <div className={`name`}>{content.author.name}</div>
                        <div className={`role`}>{content.author.role}</div>
                    </div>
                    }
                    {content.button &&
                    <Link className={`btn btn-lg button`} to={content.button.url}>
                        {content.button.label}
                    </Link>
                    }
                </div>
            </Col>
        </Row>
    </div>
)

export default injectIntl(CalloutBlock)
