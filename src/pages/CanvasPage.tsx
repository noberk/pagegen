import React from 'react'
import { useDrop } from 'react-dnd'
import { CanvasContainer, Side } from '../components/Layout'
import { DragComponentItemType } from '../constants'
import { usePanelStructure } from '../contexts/PanelStructure'
import LeftSide from './Canvas/LeftSide'
import Main from './Canvas/Main'

function CavansPage() {
  const panel = usePanelStructure()
  const [{ isOver, didDrop }, drop] = useDrop({
    accept: [DragComponentItemType.Box],
    drop: (item, monitor) => {
      if (item.type === DragComponentItemType.Button) {
        // setReactNode(<Button primary>Area</Button>)
      }
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      didDrop: monitor.didDrop(),
    }),
  })
  return (
    <CanvasContainer>
      <LeftSide />
      <Main />
      <Side w={panel.rightSide.width} />
    </CanvasContainer>
  )
}

export default CavansPage
