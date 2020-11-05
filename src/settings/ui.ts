let leftSideWidth = 300
let rightSideWidth = 300
let height1 = 80

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
  header: {
    height: height1,
  },
} as const

export type PanelsDefinition = typeof PANELS_CONFIG

export const PANELS_CONFIG2 = {
  leftSide: {
    width: leftSideWidth / 2,
  },
  rightSide: {
    width: rightSideWidth / 2,
  },
  main: {
    left: leftSideWidth,
    top: 0,
    right: rightSideWidth / 2,
    bottom: 0,
  },
  header: { height: height1 / 1.5 },
} as const
