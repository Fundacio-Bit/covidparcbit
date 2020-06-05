/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import LocalizedLink from "./localizedLink"

const isHash = str => /^#/.test(str)
const isInternal = to => /^\/(?!\/)/.test(to)

// Only use <LocalizedLink /> for internal links
const MdxLink = ({ href, ...props }) =>
  isHash(href) || !isInternal(href) ? (
    <Link {...props} href={href} sx={{ variant: "links.bodyLink" }} />
  ) : (
    <LocalizedLink {...props} to={href} />
  )

export default MdxLink
