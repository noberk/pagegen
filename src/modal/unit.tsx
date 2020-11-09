import { cssHelper } from '../common/cssHelper'
import { nanoid } from '../common/idGen'
import { DragComponentItemType } from '../constants/index'
import {
  ICommonHTMLEvent,
  IInherentComponentProps,
  Point,
} from '../types/common'

export abstract class Unit<D extends {}>
  implements ICommonHTMLEvent, IInherentComponentProps<D> {
  public abstract component: React.ReactNode
  public children: IInherentComponentProps<D>[] = []
  public style: React.CSSProperties = {}
  public abstract descrition: D
  public abstract onClick(e: any): void
  public abstract onMouseOver(e: any): void

  constructor(
    public id: string = nanoid(),
    public unitType: DragComponentItemType = DragComponentItemType.Any
  ) {}

  get point(): Point {
    return cssHelper.getPointFromCSS(this.style)
  }
}
