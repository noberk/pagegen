import React, { FC } from 'react'
import styled from 'styled-components'
import { rotate } from '../effect'

const Span = styled.span``

export type ElementSlotProps<T = {}> = {
  data: T
  draggable: boolean
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
