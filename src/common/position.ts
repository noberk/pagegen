import { Point } from '../interfaces/common'
import type { IPostion } from '../interfaces/position'

export class Position implements IPostion {
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
