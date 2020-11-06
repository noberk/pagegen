import { Position } from '../position'

let elementA = { x: 5, y: 6 }
let elementB = { x: 0, y: 9 }
let p = new Position()
describe('I want to test class Position=>', () => {
  test('Is elementA on the left side of elementB', () => {
    expect(p.isLeft(elementA, elementB)).toBe(false)

    expect(p.isLeft(elementB, elementA)).toBe(true)
  })
})
