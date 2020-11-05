let leftSideWidth = 500
let rightSideWidth = 500

export const PANELS_CONFIG = {
  leftSide: {
    width: leftSideWidth,
  },
  rightSide: {
    width: rightSideWidth,
  },
  main: {
    left: leftSideWidth,
    top: 0,
    right: rightSideWidth,
    bottom: 0,
  },
  header: {},
} as const

export type PanelsDefinition = typeof PANELS_CONFIG
