import React, { useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Button } from '../components/Layout'
import { DragItemType } from '../constant'

function Knight() {
  const [{ isDragging }, drag] = useDrag({
    item: { type: DragItemType.Emoji, id: 'unicorn' },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  return (
    <span
      ref={drag}
      style={{ fontSize: '3rem', opacity: isDragging ? 0.5 : 1 }}
    >
      🦄
    </span>
  )
}

function Square({ black, children }) {
  const [reactNode, setReactNode] = useState<any>(null)
  const [{ isOver, didDrop }, drop] = useDrop({
    accept: [DragItemType.Emoji, DragItemType.Input, DragItemType.Button],
    drop: (item, monitor) => {
      console.log(item)

      if (item.type === DragItemType.Emoji) {
        setReactNode('🐷')
        return
      }
      if (item.type === DragItemType.Input) {
        setReactNode(<input defaultValue={123} />)
        return
      }
      if (item.type === DragItemType.Button) {
        setReactNode(<Button primary>Area</Button>)
      }
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      didDrop: monitor.didDrop(),
    }),
  })

  const fill = black ? 'black' : 'white'
  const stroke = black ? 'white' : 'black'

  return (
    <div
      ref={drop}
      style={{
        fontSize: '2rem',
        backgroundColor: isOver ? 'red' : fill,
        color: stroke,
        width: '100%',
        height: '100%',
      }}
    >
      {reactNode || children}
    </div>
  )
}

function renderSquare(
  i,
  [knightX, knightY]: [knightX: number, knightY: number]
) {
  const x = i % 8
  const y = Math.floor(i / 8)
  const isKnightHere = x === knightX && y === knightY
  const black = (x + y) % 2 === 1
  const piece = isKnightHere ? <Knight /> : null

  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <Square black={black}>{piece}</Square>
    </div>
  )
}
export const ItemTypes = {
  KNIGHT: 'knight',
}
function Board({ knightPosition }) {
  const squares: any[] = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {squares}
    </div>
  )
}

export default Board
