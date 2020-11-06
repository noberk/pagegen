import { Point } from './common'

export interface IPostion {
  static isLeft(a: Point, b: Point): boolean
  isRigth(): boolean
  isTop(): boolean
  isBottom(): boolean
}
