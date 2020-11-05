let leftSideWidth = 500
let rightSideWidth = 500
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
    width: leftSideWidth / 5,
  },
  rightSide: {
    width: rightSideWidth / 5,
  },
  main: {
    left: leftSideWidth,
    top: 0,
    right: rightSideWidth / 5,
    bottom: 0,
  },
  header: { height: height1 / 4 },
} as const
