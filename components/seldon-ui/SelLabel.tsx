import { CSSProperties } from "react"
import * as config from "./config"

type SelLabelProps = {
  color?: config.SeldonProps["color"]
  font: config.SeldonProps["font"]
  children: React.ReactNode
} & React.HTMLAttributes<HTMLParagraphElement>

export function SelLabel(props: SelLabelProps) {
  const {
    color = config.defaultProps.color,
    font = config.defaultProps.font,
    children,
    ...rest
  } = props

  const styles: CSSProperties = {
    ...config.tokenStyles[color],
    ...config.tokenStyles[font],
    ...(rest.style ?? {}),
  }

  return <p style={styles}>{children}</p>
}
