import React from 'react';
import {injectIntl, Link} from "gatsby-plugin-intl";

function SimpleCTA({ intl, theme, content }) {

    return(

        <div className={`simple-cta`}>

            <div className={`content `+ theme}>
                {content.title &&
                <div className={`title`}>{content.title}</div>
                }
                {content.text &&
                <div className={`text`} dangerouslySetInnerHTML={{__html: content.text}}></div>
                }
                {content.button &&
                <Link className={`btn btn-lg btn-white button`} to={content.button.url}>
                    {content.button.label}
                </Link>
                }
            </div>

        </div>

    )

}

export default injectIntl(SimpleCTA)
