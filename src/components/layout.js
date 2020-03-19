import React from "react"
import PropTypes from "prop-types"
import NotificarePushManager from "./notificare"
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false;
library.add(fab, fas);

const Layout = ({ children }) => {
    return (
        <>
            <NotificarePushManager />
            <main className={`main-page`}>{children}</main>
        </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
