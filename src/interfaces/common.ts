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

interface InherentComponentProps {
  style?: React.CSSProperties
  descrition?: string
  children?: InherentComponentProps[]
}

export interface ICommonHTMLEvent {
  onClick(e: any): void

  onMouseOver(e: any): void
}
