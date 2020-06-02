/** @jsx jsx */
import { jsx, Image } from "theme-ui"
import { Link } from "gatsby"

import adpub from "../images/adpub.png"
import fbit from "../images/fbit.png"
import apte from "../images/apte.png"

const Footer = () => {
  return (
    <footer
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        variant: "styles.footer",
      }}
    >
      <Link
        href="https://www.fundaciobit.org"
        sx={{
          variant: "links.navlink",
          p: 2,
          mx: 4,
        }}
      >
        <Image src={adpub} sx={{ width: 100 }} />
      </Link>
      <Link
        href="https://www.fundaciobit.org"
        sx={{
          variant: "links.navlink",
          p: 2,
          mx: 4,
        }}
      >
        <Image src={fbit} sx={{ width: 100 }} />
      </Link>
      <Link
        href="https://www.fundaciobit.org"
        sx={{
          variant: "links.navlink",
          p: 2,
          mx: 4,
        }}
      >
        <Image src={apte} sx={{ width: 100 }} />
      </Link>
    </footer>
  )
}

export default Footer
