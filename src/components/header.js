/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import LocalizedLink from "./localizedLink"
import useTranslations from "./useTranslations"
import logo from "../images/logoparcbit.svg"

const Header = ({ siteTitle }) => {
  const { home, buildings, park, contact } = useTranslations()
  return (
    <header
      sx={{
        py: 4,
        variant: "styles.header",
      }}
    >
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <LocalizedLink to="/" title={home}>
          <img alt="ParcBit Logo" src={logo} sx={{ width: 48, height: 48 }} />
          <span
            sx={{
              position: "absolute",
              width: 1,
              height: 1,
              overflow: "hidden",
              top: -9999,
            }}
          >
            Home
          </span>
        </LocalizedLink>
      </div>
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          maxWidth: 768,
          mx: "auto",
          px: 3,
          py: 3,
        }}
      >
        <div
          sx={{
            flexGrow: 1,
            flexBasis: "sidebar",
          }}
        >
          <LocalizedLink
            to="/"
            sx={{
              variant: "links.navlink",
              p: 2,
            }}
          >
            {home}
          </LocalizedLink>
          <LocalizedLink
            to="/park"
            sx={{
              variant: "links.navlink",
              p: 2,
            }}
          >
            {park}
          </LocalizedLink>
          <LocalizedLink
            to="/buildings"
            sx={{
              variant: "links.navlink",
              p: 2,
            }}
          >
            {buildings}
          </LocalizedLink>
          <LocalizedLink
            to="/contact"
            sx={{
              variant: "links.navlink",
              p: 2,
            }}
          >
            {contact}
          </LocalizedLink>
        </div>
        <div
          sx={{
            ml: "auto",
          }}
        >
          <Link
            to="/"
            hrefLang="es"
            sx={{
              variant: "links.navlink",
              p: 2,
            }}
          >
            ES
          </Link>
          <Link
            to="/ca"
            hrefLang="ca"
            sx={{
              variant: "links.navlink",
              p: 2,
            }}
          >
            CA
          </Link>
          <Link
            to="/en"
            hrefLang="en"
            sx={{
              variant: "links.navlink",
              p: 2,
            }}
          >
            EN
          </Link>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
