import { Point } from '../types/common'
import { ICSSFunctions } from '../types/css'

export const cssHelper: ICSSFunctions = {
  getPointFromCSS(style: React.CSSProperties): Point {
    return {
      x: style.left ?? 0,
      y: style.top ?? 0,
    } as Point
  },
}


