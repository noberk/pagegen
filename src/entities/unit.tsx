import { cssHelper } from '../common/cssHelper'
import { nanoid } from '../common/idGen'
import { DragComponentItemType } from '../constants/index'
import {
  ICommonHTMLEvent,
  IInherentComponentProps,
  Point,
} from '../types/common'

/**
 * 单元信息, 用于描述画布上的每一个独立单位
 */
export abstract class Unit<P extends {}>
  implements ICommonHTMLEvent, IInherentComponentProps<P> {
  public abstract component: React.ReactNode
  public children: IInherentComponentProps<P>[] = []
  public style: React.CSSProperties = {}
  public abstract props: P
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
