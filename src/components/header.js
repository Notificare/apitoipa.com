import React from "react"
import {Container, Badge} from 'react-bootstrap'
import {injectIntl, Link} from "gatsby-plugin-intl"
import logo from "../images/notificare-logo.svg"
import HeaderData from "../content/header.json"

function Header({ intl, siteTitle, scrollClass, theme }) {

    const [ headerClass, setHeaderClass ] = React.useState("");

    const handleOpenMenu = (e) => {
        e.preventDefault();
        setHeaderClass("is-open");
    }

    const handleCloseMenu = (e) => {
        e.preventDefault();
        setHeaderClass("");
    }

    return(
        <div className={`header ` + theme + ` ` + scrollClass + ` ` + headerClass}>
            <Container>
                <div className={`navigation-bar`}>
                    <Link className={`brand`} to="/">
                        <img alt={siteTitle} src={logo} width="224" height="44" />
                    </Link>
                    <div id={`demoNavigation`} className={`navigation`}>
                        {HeaderData[intl.locale].nav.map((item, i) => {
                            return (
                              <div key={i} role="button" tabIndex={i} className={`navigation-item`}>
                                  <Link className={`item`} to={item.url} activeClassName={`active`}>
                                      {item.label}
                                      {item.useBadge &&
                                      <Badge id={`notificareBadge`} variant="danger-dark"></Badge>
                                      }
                                  </Link>
                              </div>
                            )
                        })}
                    </div>
                    <a href={`/`} onClick={handleOpenMenu} className={`open-menu-button`}>
                        <div className={`lines line-1`}></div>
                        <div className={`lines line-2`}></div>
                        <div className={`lines line-3`}></div>
                    </a>
                    <a href={`/`} onClick={handleCloseMenu} className={`close-menu-button`}><span></span></a>
                </div>
            </Container>
        </div>
    )

}

export default injectIntl(Header)



