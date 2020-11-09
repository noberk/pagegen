import { Point } from './common'

export interface ICSSFunctions {
  getPointFromCSS(style: React.CSSProperties): Point
}
