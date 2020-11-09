import { DragComponentItemType } from '../constants/index'
import { ICommonHTMLEvent } from './common'
export class Unit implements ICommonHTMLEvent {
  onClick(e: any): void {
    throw new Error('Method not implemented.')
  }
  onMouseOver(e: any): void {
    throw new Error('Method not implemented.')
  }
  constructor(private id:string){

  }
  UnitType: DragComponentItemType
}
