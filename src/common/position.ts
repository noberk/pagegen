import type { IPostion } from '../interfaces/position'

export class Position implements IPostion {
  isLeft(): boolean {
    throw new Error('Method not implemented.')
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
