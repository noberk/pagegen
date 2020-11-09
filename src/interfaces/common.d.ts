/**
 * 描述一个HTMLElement在浏览器中的的位置
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
