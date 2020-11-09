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

export interface InherentComponentProps<D = {}> {
  style: React.CSSProperties
  descrition: D
  children: InherentComponentProps<D>[]
  point: Point
}

export interface ICommonHTMLEvent {
  onClick(e: any): void

  onMouseOver(e: any): void
}



