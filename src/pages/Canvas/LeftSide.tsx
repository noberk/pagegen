import React from 'react'
import { Rotate } from '../../components/effect'
import { DraggableSpanSlot, ElementSlot } from '../../components/Interaction'
import { Button, DashBox, DashCircle, Side } from '../../components/Layout'
import { DragComponentItemType } from '../../constants'

export default function () {
  return (
    <Side>
      <div>
        <header>Components</header>
        <DraggableSpanSlot dragType={DragComponentItemType.Button}>
          <Button primary>Area</Button>
        </DraggableSpanSlot>
        <DraggableSpanSlot dragType={DragComponentItemType.Input}>
          <Button primary>Input</Button>
        </DraggableSpanSlot>
      </div>
      <div>
        <header>Boxes</header>
        <DraggableSpanSlot dragType={DragComponentItemType.Box}>
          <DashBox />
        </DraggableSpanSlot>
        <DraggableSpanSlot dragType={DragComponentItemType.Box}>
          <DashBox style={{width:50,height:50}} />
        </DraggableSpanSlot>
        <DraggableSpanSlot dragType={DragComponentItemType.Any}>
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
