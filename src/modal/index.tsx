import { Component } from 'react'
import { DashBox } from '../components/Layout'
import { Unit } from './unit'

export const Rectangle = new class extends Unit<{
  title: string
  age: number
}> {
  onClick(e: any): void {}
  onMouseOver(e: any): void {}
  public descrition: { title: string; age: number } = {
    title: '123',
    age: 5,
  }
  public component = DashBox
}

//   export const Button = new (class InputUnit extends Unit {
//     onClick(e: any): void {
//       throw new Error('Method not implemented.')
//     }
//     onMouseOver(e: any): void {
//       throw new Error('Method not implemented.')
//     }
//   })()

// onClick(e: any): void {}
// onMouseOver(e: any): void {}

// public descrition: { title: string; age: number } = {
//   title: '123',
//   age: 5,
// }
