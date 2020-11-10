import { DashBox, DashCircle } from '../components/Layout'
import { DragComponentItemType } from '../constants'
import { unitDefaultStyle } from '../settings/eachUnitDefaultStyle'
import { Unit } from './unit'

// here must be multiple instances not a Singleton
export const Rectangle = new (class extends Unit<{
  title: string
  age: number
}> {
  onClick(e: any): void {}
  onMouseOver(e: any): void {}
  public props: { title: string; age: number } = {
    title: '123',
    age: 5,
  }
  constructor() {
    super()
    this.unitType = DragComponentItemType.Box
    this.style = unitDefaultStyle[this.unitType]
  }
  public component = DashBox
  public point = { x: 0, y: 0 }
})()

// export const Circle = new (class extends Unit<{
//   title: string
//   age: number
// }> {
//   onClick(e: any): void {}
//   onMouseOver(e: any): void {}
//   public props: { title: string; age: number } = {
//     title: '123',
//     age: 5,
//   }
//   constructor() {
//     super()
//     this.style = unitDefaultStyle[this.unitType]
//   }
//   public component = DashCircle
// })()
