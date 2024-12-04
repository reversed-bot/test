import { CSSProperties, HTMLAttributes } from "react"
import { SelIcon } from "./SelIcon"
import { SelLabel } from "./SelLabel"
import * as config from "./config"

const ICON_SIZE = 1.2
// All these values are multiplied by the font size to get the absolute value
const GAP_SIZE = 0.5
const X_PADDING = 0.8
const Y_PADDING = 0.5
// In order to make buttons without icons just as high as buttons with icons,
// we need to add extra padding to the top and bottom.
const LABEL_ONLY_EXTRA_PADDING = (ICON_SIZE - 1) / 2
const LABEL_ONLY_Y_PADDING = Y_PADDING + LABEL_ONLY_EXTRA_PADDING

export type SelButtonProps = {
  buttonSize?: config.SeldonProps["button.buttonSize"]
  border?: config.SeldonProps["border"]
  variant?: config.SeldonProps["button.variant"]
  background?: config.SeldonProps["background"]
  icon?: config.SeldonProps["icon"]
  iconPosition?: config.SeldonProps["button.iconPosition"]
  font?: config.SeldonProps["font"]
  corners?: config.SeldonProps["corners"]
  color?: config.SeldonProps["color"]
  opacity?: config.SeldonProps["opacity"]
} & HTMLAttributes<HTMLButtonElement>

export function SelButton(props: SelButtonProps) {
  const {
    iconPosition = config.defaultProps[
      "button.iconPosition"
    ] as config.SeldonProps["button.iconPosition"],
    variant = config.defaultProps[
      "button.variant"
    ] as config.SeldonProps["button.variant"],
    buttonSize = config.defaultProps[
      "button.buttonSize"
    ] as config.SeldonProps["button.buttonSize"],
    background = config.defaultProps
      .background as config.SeldonProps["background"],
    color = config.defaultProps.color as config.SeldonProps["color"],
    icon = config.defaultProps.icon as config.SeldonProps["icon"],
    font = config.defaultProps.font as config.SeldonProps["font"],
    corners = config.defaultProps.corners as config.SeldonProps["corners"],
    border = config.defaultProps.border as config.SeldonProps["border"],
    ...rest
  } = props

  props.iconPosition ?? config.defaultProps["button.iconPosition"]
  // const variant = props.variant ?? config.defaultProps["button.variant"]
  // const buttonSize =
  //   props.buttonSize ?? config.defaultProps["button.buttonSize"]
  // const icon = props.icon ?? config.defaultProps.icon
  // const font = props.font ?? config.defaultProps.font

  const styles: CSSProperties = {
    ...config.componentStyles.button,
    ...config.tokenStyles[corners],
    ...config.tokenStyles[background],
    ...config.tokenStyles[border],
    ...config.tokenStyles[color],
    ...(props.style ?? {}),
    width: "fit-content",
    gap: `${GAP_SIZE}rem`,
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
    padding: getPaddingCSS(variant, iconPosition),
  }

  let iconSize = "16px"
  if (styles.fontSize) {
    iconSize = `calc(${styles.fontSize} * ${ICON_SIZE})`
  }

  if (iconPosition === "sel-iconPosition-end") {
    styles.flexDirection = "row-reverse"
  }

  return (
    <button style={styles} {...rest}>
      {variant === "sel-variant-icon+label" && icon && (
        <>
          <SelIcon icon={icon} size={iconSize} />
          <SelLabel color={color} font={font}>
            {props.children}
          </SelLabel>
        </>
      )}
      {variant === "sel-variant-label-only" && (
        <SelLabel color={props.color} font={font}>
          {props.children}
        </SelLabel>
      )}
      {variant === "sel-variant-icon-only" && icon && (
        <SelIcon icon={icon} size={iconSize} />
      )}
    </button>
  )
}

/**
 * Get the padding CSS value for Buttton based on properties
 */
export function getPaddingCSS(
  variant: config.SeldonProps["button.variant"],
  iconPosition: config.SeldonProps["button.iconPosition"],
): CSSProperties["padding"] | undefined {
  if (variant === "sel-variant-icon-only") {
    return getMarginPaddingShorthand({
      top: Y_PADDING,
      right: Y_PADDING,
      bottom: Y_PADDING,
      left: Y_PADDING,
    })
  }

  if (variant === "sel-variant-label-only") {
    return getMarginPaddingShorthand({
      top: LABEL_ONLY_Y_PADDING,
      right: X_PADDING,
      bottom: LABEL_ONLY_Y_PADDING,
      left: X_PADDING,
    })
  }

  if (variant === "sel-variant-icon+label") {
    if (iconPosition === "sel-iconPosition-end") {
      return getMarginPaddingShorthand({
        top: Y_PADDING,
        right: X_PADDING,
        bottom: Y_PADDING,
        left: 1,
      })
    } else {
      return getMarginPaddingShorthand({
        top: Y_PADDING,
        right: 1,
        bottom: Y_PADDING,
        left: X_PADDING,
      })
    }
  }

  throw new Error("Invalid variant " + variant)
}

function getMarginPaddingShorthand(sides: {
  top: number
  right: number
  bottom: number
  left: number
}) {
  return `${sides.top}rem ${sides.right}rem ${sides.bottom}rem ${sides.left}rem`
}
