/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import LocalizedLink from "./localizedLink"

const isHash = str => /^#/.test(str)
const isInternal = to => /^\/(?!\/)/.test(to)

// Only use <LocalizedLink /> for internal links
const MdxLink = ({ href, ...props }) =>
  isHash(href) || !isInternal(href) ? (
    <Link
      {...props}
      href={href}
      sx={{ variant: "links.bodyLink" }}
      target="_blank"
    />
  ) : (
    <LocalizedLink {...props} to={href} />
  )

export default MdxLink
