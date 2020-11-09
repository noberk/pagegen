import { Point } from '../types/common'
import type { ILocate } from '../types/locate'

export class Position implements ILocate {
  isLeft(a: Point, b: Point) {
    return a.x < b.x
  }
  isRigth(): boolean {
    throw new Error('Method not implemented.')
  }
  isTop(): boolean {
    throw new Error('Method not implemented.')
  }
  isBottom(): boolean {
    throw new Error('Method not implemented.')
  }
}
