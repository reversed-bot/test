import { CSSProperties } from "react"

export type SeldonProps = {
  icon: "sel-icon-default-__default__" | "sel-icon-default-ticket"
  color: "sel-color-default-@swatch.black" | "sel-color-auto"
  margin: "sel-margin-null" | "sel-margin-default-null-null-tight-null"
  width: "sel-width-fill" | "sel-width-fit"
  height: "sel-height-fit" | "sel-height-fill"
  font:
    | "sel-font-default-label-null-medium-null-null"
    | "sel-font-default-label-null-null"
  orientation: "sel-orientation-horizontal" | "sel-orientation-vertical"
  background: "sel-background-default-primary" | "sel-background-null"
  corners:
    | "sel-corners-default-rounded-rounded-rounded-rounded"
    | "sel-corners-null"
  padding: "sel-padding-default-auto-auto-auto-auto" | "sel-padding-null"
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
  "sel-color-default-@swatch.black": {
    color: "hsl(0deg 12% 8%)",
  },
  "sel-color-auto": {
    color: "hsl(0deg 12% 8%)",
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
  "sel-corners-default-rounded-rounded-rounded-rounded": {
    borderTopRightRadius: "86.736rem",
    borderBottomRightRadius: "86.736rem",
    borderBottomLeftRadius: "86.736rem",
    borderTopLeftRadius: "86.736rem",
  },
  "sel-corners-null": {},
  "sel-padding-default-auto-auto-auto-auto": {},
  "sel-padding-null": {},
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
  background: "sel-background-default-primary",
  corners: "sel-corners-default-rounded-rounded-rounded-rounded",
  padding: "sel-padding-default-auto-auto-auto-auto",
  align: "sel-align-left",
  gap: "sel-gap-default-@gap.cozy",
  clip: "sel-clip",
}
