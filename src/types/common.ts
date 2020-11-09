import { addSyntheticLeadingComment } from 'typescript'

/**
 * Describe a point where HTMLElement e browser.
 * `🈲`Don't extend this interface... otherwise...
 */
export interface Point {
  x: number
  y: number
}
/**
 * 描述一个矩形区域
 */
export interface Rect {
  width: number
  height: number
}

export interface IInherentComponentProps<D = {}> {
  style: React.CSSProperties
  descrition: D
  children: IInherentComponentProps<D>[]
  point: Point
  component: React.ReactNode
}

export interface ICommonHTMLEvent {
  onClick(e: any): void

  onMouseOver(e: any): void
}
