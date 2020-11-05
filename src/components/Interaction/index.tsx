import React, { FC } from 'react'
import { useDrag } from 'react-dnd'
import styled from 'styled-components'
import { DragComponentItemType } from '../../constants'
import { rotate } from '../effect'

const Span = styled.span``

export type ElementSlotProps<T = {}> = {
  data: T
  draggable: boolean
}
export type DraggableSpanSlot<T = {}> = {
  dragType?: DragComponentItemType
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
  dragType = DragComponentItemType.Any,
}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: dragType, id: 'unicorn' },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  return (
    <span ref={drag} style={{ opacity: isDragging ? 1 : 1 }}>
      {children}
    </span>
  )
}
