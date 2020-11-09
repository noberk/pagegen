import { cssHelper } from '../common/cssHelper'
import { nanoid } from '../common/idGen'
import { DragComponentItemType } from '../constants/index'
import {
  ICommonHTMLEvent,
  InherentComponentProps,
  Point,
} from '../types/common'

export abstract class Unit<D extends {}>
  implements ICommonHTMLEvent, InherentComponentProps<D> {
  abstract onClick(e: any): void
  abstract onMouseOver(e: any): void
  public children: InherentComponentProps<D>[] = []
  style: React.CSSProperties = {}
  public abstract descrition: D

  constructor(
    public id: string = nanoid(),
    public unitType: DragComponentItemType = DragComponentItemType.Any
  ) {}

  get point(): Point {
    return cssHelper.getPointFromCSS(this.style)
  }
}
