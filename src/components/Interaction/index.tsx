import React, { FC } from 'react'
import { useDrag } from 'react-dnd'
import styled from 'styled-components'
import { DragItemType } from '../../constant'
import { rotate } from '../effect'

const Span = styled.span``

export type ElementSlotProps<T = {}> = {
  data: T
  draggable: boolean
}
export type DraggableSpanSlot<T = {}> = {
  dragType?: DragItemType
}
export const ElementSlot: FC<Partial<ElementSlotProps>> = ({ children }) => {
  return (
    <Span
      draggable
      onDragStart={ev => {
        ev.dataTransfer.setData('text/plain', 'my name')
        ev.dataTransfer.dropEffect = 'copy'
      }}
    >
      {children}
    </Span>
  )
}

export const DraggableSpanSlot: FC<DraggableSpanSlot> = ({
  children,
  dragType = DragItemType.Any,
}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: dragType, id: 'unicorn' },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  return (
    <span
      ref={drag}
      style={{ fontSize: '3rem', opacity: isDragging ? 0.5 : 1 }}
    >
      {children}
    </span>
  )
}
