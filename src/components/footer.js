/** @jsx jsx */
import { jsx, Image, Link } from "theme-ui"

import adpub from "../images/adpub.png"
import logoparcbit from "../images/logoparcbit.svg"
import logocentrebit from "../images/logocentrebit.svg"
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
        href="https://www.parcbit.es"
        sx={{
          variant: "links.navlink",
          p: 2,
          mx: 4,
        }}
      >
        <Image src={logoparcbit} sx={{ height: 50 }} alt="Parc Bit" />
      </Link>
      <Link
        href="https://www.fundaciobit.org/centrebit-menorca-cat/"
        sx={{
          variant: "links.navlink",
          p: 2,
          mx: 4,
        }}
      >
        <Image src={logocentrebit} sx={{ height: 50 }} alt="Centre Bit" />
      </Link>
      <Link
        href="https://www.apte.org"
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
