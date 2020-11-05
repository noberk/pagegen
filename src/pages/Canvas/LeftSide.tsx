import React from 'react'
import { Rotate } from '../../components/effect'
import { DraggableSpanSlot, ElementSlot } from '../../components/Interaction'
import { Button, DashBox, DashCircle, Side } from '../../components/Layout'
import { DragItemType } from '../../constant'

export default function () {
  return (
    <Side>
      <div>
        <header>Components</header>
        <DraggableSpanSlot dragType={DragItemType.Button}>
          <Button primary>Area</Button>
        </DraggableSpanSlot>
        <DraggableSpanSlot dragType={DragItemType.Input}>
          <Button primary>Input</Button>
        </DraggableSpanSlot>
      </div>
      <div>
        <header>Boxes</header>
        <DraggableSpanSlot dragType={DragItemType.Button}>
          <DashBox />
        </DraggableSpanSlot>
        <DraggableSpanSlot dragType={DragItemType.Button}>
          <DashCircle />
        </DraggableSpanSlot>
      </div>
      <div>
        <header>simple sheet</header>
        <ElementSlot>
          <Rotate>🦄</Rotate>
        </ElementSlot>
      </div>
    </Side>
  )
}
