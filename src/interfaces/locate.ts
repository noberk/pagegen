import { Point } from './common'

export interface ILocate {
  isLeft(a: Point, b: Point): boolean
  isRigth(): boolean
  isTop(): boolean
  isBottom(): boolean
}
