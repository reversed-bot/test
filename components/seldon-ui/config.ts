import { CSSProperties } from "react"

export type SeldonProps = {
  icon:
    | "sel-icon-default-__default__"
    | "sel-icon-default-ticket"
    | "sel-icon-klm-arrowCircleDown"
  color:
    | "sel-color-default-@swatch.black"
    | "sel-color-auto"
    | "sel-color-default-@swatch.white"
  margin: "sel-margin-null" | "sel-margin-default-null-null-tight-null"
  width: "sel-width-fill" | "sel-width-fit"
  height: "sel-height-fit" | "sel-height-fill"
  font:
    | "sel-font-default-label-null-medium-null-null"
    | "sel-font-default-label-null-null"
    | "sel-font-klm-label-null-null"
  orientation: "sel-orientation-horizontal" | "sel-orientation-vertical"
  "button.buttonSize":
    | "sel-buttonSize-default-@fontSize.medium"
    | "sel-buttonSize-klm-@fontSize.medium"
  "button.variant":
    | "sel-variant-icon+label"
    | "sel-variant-label-only"
    | "sel-variant-icon-only"
  background:
    | "sel-background-default-primary"
    | "sel-background-null"
    | "sel-background-default-gray-primary-null-null-null-null-null"
    | "sel-background-default-custom1"
    | "sel-background-klm-primary"
  corners:
    | "sel-corners-default-rounded-rounded-rounded-rounded"
    | "sel-corners-null"
    | "sel-corners-klm-rounded-rounded-rounded-rounded"
  padding:
    | "sel-padding-default-auto-auto-auto-auto"
    | "sel-padding-null"
    | "sel-padding-klm-auto-auto-auto-auto"
  align: "sel-align-left" | "sel-align"
  gap: "sel-gap-default-@gap.cozy" | "sel-gap"
  clip: "sel-clip" | "sel-clip-true"
}

export const componentStyles: Record<string, CSSProperties> = {
  icon: {
    opacity: 1,
  },
  label: {
    opacity: 1,
    textAlign: "start",
    color: "hsl(0deg 12% 8%)",
    textTransform: "none",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  button: {
    opacity: 1,
    textTransform: "none",
    direction: "inherit",
  },
  actionBar: {
    opacity: 1,
    direction: "inherit",
  },
  frame: {
    opacity: 1,
    direction: "inherit",
  },
}

export const tokenStyles: Record<string, CSSProperties> = {
  "sel-icon-default-__default__": {},
  "sel-icon-default-ticket": {},
  "sel-icon-klm-arrowCircleDown": {},
  "sel-color-default-@swatch.black": {
    color: "hsl(0deg 12% 8%)",
  },
  "sel-color-auto": {
    color: "hsl(0deg 12% 8%)",
  },
  "sel-color-default-@swatch.white": {
    color: "hsl(0deg 12% 98%)",
  },
  "sel-margin-null": {},
  "sel-margin-default-null-null-tight-null": {
    marginBottom: "0.41rem",
  },
  "sel-width-fill": {
    alignSelf: "stretch",
  },
  "sel-width-fit": {
    width: "fit-content",
  },
  "sel-height-fit": {
    height: "fit-content",
  },
  "sel-height-fill": {
    flex: "1 0 0",
  },
  "sel-font-default-label-null-medium-null-null": {
    fontSize: "1rem",
    fontFamily: "Roboto",
    fontWeight: 600,
    lineHeight: 1,
  },
  "sel-font-default-label-null-null": {
    fontFamily: "Roboto",
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: 1,
  },
  "sel-font-klm-label-null-null": {
    fontFamily: "Open Sans",
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: 1,
  },
  "sel-orientation-horizontal": {
    flexDirection: "row",
  },
  "sel-orientation-vertical": {
    flexDirection: "column",
  },
  "sel-background-default-primary": {
    backgroundColor: "hsl(0deg 0% 15%)",
  },
  "sel-background-null": {},
  "sel-background-default-gray-primary-null-null-null-null-null": {
    backgroundColor: "hsl(0deg 12% 56%)",
  },
  "sel-background-default-custom1": {
    backgroundColor: "hsl(0deg 100% 65%)",
  },
  "sel-background-klm-primary": {
    backgroundColor: "hsl(202deg 100% 50%)",
  },
  "sel-corners-default-rounded-rounded-rounded-rounded": {
    borderTopRightRadius: "86.736rem",
    borderBottomRightRadius: "86.736rem",
    borderBottomLeftRadius: "86.736rem",
    borderTopLeftRadius: "86.736rem",
  },
  "sel-corners-null": {},
  "sel-corners-klm-rounded-rounded-rounded-rounded": {
    borderTopRightRadius: "5.96rem",
    borderBottomRightRadius: "5.96rem",
    borderBottomLeftRadius: "5.96rem",
    borderTopLeftRadius: "5.96rem",
  },
  "sel-padding-default-auto-auto-auto-auto": {},
  "sel-padding-null": {},
  "sel-padding-klm-auto-auto-auto-auto": {},
  "sel-align-left": {
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
  },
  "sel-align": {},
  "sel-gap-default-@gap.cozy": {
    gap: "1rem",
  },
  "sel-gap": {},
  "sel-clip": {},
  "sel-clip-true": {
    overflow: "hidden",
  },
}

export const defaultProps: Record<string, string> = {
  icon: "sel-icon-default-__default__",
  color: "sel-color-default-@swatch.black",
  margin: "sel-margin-null",
  width: "sel-width-fill",
  height: "sel-height-fit",
  font: "sel-font-default-label-null-medium-null-null",
  orientation: "sel-orientation-horizontal",
  "button.buttonSize": "sel-buttonSize-default-@fontSize.medium",
  "button.variant": "sel-variant-icon+label",
  background: "sel-background-default-primary",
  corners: "sel-corners-default-rounded-rounded-rounded-rounded",
  padding: "sel-padding-default-auto-auto-auto-auto",
  align: "sel-align-left",
  gap: "sel-gap-default-@gap.cozy",
  clip: "sel-clip",
}
