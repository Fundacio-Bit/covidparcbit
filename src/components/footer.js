/** @jsx jsx */
import { jsx, Image, Link } from "theme-ui"

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
        <Image
          src={adpub}
          sx={{ width: 100 }}
          alt="Conselleria d'Administracions Públiques i Modernització"
        />
      </Link>
      <Link
        href="https://www.fundaciobit.org"
        sx={{
          variant: "links.navlink",
          p: 2,
          mx: 4,
        }}
      >
        <Image src={fbit} sx={{ width: 100 }} alt="Fundació Bit" />
      </Link>
      <Link
        href="https://www.fundaciobit.org"
        sx={{
          variant: "links.navlink",
          p: 2,
          mx: 4,
        }}
      >
        <Image src={apte} sx={{ width: 100 }} alt="APTE" />
      </Link>
    </footer>
  )
}

export default Footer
