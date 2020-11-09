import { Point } from './common'

export interface ICSSFunctions {
  /**Convert  top and left properties to canvas point. */
  getPointFromCSS(style: React.CSSProperties): Point
}
