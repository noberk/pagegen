import { Component } from 'react'
import { Unit } from './unit'

export namespace Components {
  export const Rectangle = new (class extends Unit<{
    title: string
    age: number
  }> {
    onClick(e: any): void {}
    onMouseOver(e: any): void {}
    public descrition: { title: string; age: number } = {
      title: '123',
      age: 5,
    }
  })()

  //   export const Button = new (class InputUnit extends Unit {
  //     onClick(e: any): void {
  //       throw new Error('Method not implemented.')
  //     }
  //     onMouseOver(e: any): void {
  //       throw new Error('Method not implemented.')
  //     }
  //   })()
}
