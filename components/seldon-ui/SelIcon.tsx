import * as config from "./config"

type SelIconProps = {
  icon?: config.SeldonProps["icon"]
  color?: config.SeldonProps["color"]
  size?: number | string
} & React.SVGProps<SVGSVGElement>

export function SelIcon(props: SelIconProps) {
  const {
    icon = config.defaultProps.icon,
    color = config.defaultProps.color,
    size = 16,
    ...rest
  } = props
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        height="1em"
        width="1em"
        style={{
          ...config.componentStyles.icon,
          ...config.tokenStyles[icon],
          ...config.tokenStyles[color],
          color,
          width: size,
          height: size,
          ...(rest.style ?? {}),
        }}
        {...rest}
      >
        <path
          d="M12 21C10.6588 21 9.88572 20.4278 8.33953 19.2834C0.221721 13.2749 1.01807 6.15294 4.53744 3.99415C7.21909 2.34923 9.55962 3.01211 10.9656 4.06801C11.5422 4.50096 11.8304 4.71743 12 4.71743C12.1696 4.71743 12.4578 4.50096 13.0344 4.06801C14.4404 3.01211 16.7809 2.34923 19.4626 3.99415C21.1812 5.04838 22.2505 7.28623 21.9494 10"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14 17H22M18 13L18 21"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  )
}
