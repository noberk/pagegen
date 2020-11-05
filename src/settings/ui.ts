let leftSideWidth = 300
let rightSideWidth = 150

export const PANELS_CONFIG: {
  [key in string]: React.CSSProperties
} = {
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
}

export type PanelsDefinition = typeof PANELS_CONFIG
