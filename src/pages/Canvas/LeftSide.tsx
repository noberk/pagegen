import React from 'react'
import { Button } from '../../components/basePart'
import { Rotate } from '../../components/effect'
import { DraggableSpanSlot, ElementSlot } from '../../components/Interaction'
import { DashBox, DashCircle, Side } from '../../components/Layout'
import { DragComponentItemType } from '../../constants'
import { usePanelStructure } from '../../contexts/PanelStructure'

export default function () {
  const [panel] = usePanelStructure()
  return (
    <Side w={panel.leftSide.width}>
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
          <DashBox style={{ width: 50, height: 50 }} />
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
