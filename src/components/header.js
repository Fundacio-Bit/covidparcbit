/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import LocalizedLink from "./localizedLink"
import useTranslations from "./useTranslations"
import logo from "../images/logoparcbit.svg"

const Header = ({ siteTitle }) => {
  const { home, buildings, park } = useTranslations()
  return (
    <header
      sx={{
        display: "grid",
        gridGap: 3,
        maxWidth: 768,
        mx: "auto",
        px: 3,
        py: 3,
        gridAutoFlow: "row",
        gridTemplateColumns: ["repeat(2, 1fr)", "repeat(3, 1fr)"],
        variant: "styles.header",
      }}
    >
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gridColumnStart: [1, 2],
          gridColumnEnd: [3, 3],
          order: [0, 1],
        }}
      >
        <LocalizedLink to="/" title="Home">
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
            {home}
          </span>
        </LocalizedLink>
      </div>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
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
      </div>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          order: 2,
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
