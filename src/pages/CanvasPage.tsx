import React from 'react'
import { useDrop } from 'react-dnd'
import { Button } from '../components/basePart'
import { CanvasContainer, Header, Side } from '../components/Layout'
import { DragComponentItemType } from '../constants'
import { usePanelStructure } from '../contexts/PanelStructure'
import LeftSide from './Canvas/LeftSide'
import Main from './Canvas/Main'

function CavansPage() {
  const [panel, { toggle }] = usePanelStructure()
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
    <>
      <Header h={panel.header.height}>
        <Button primary onClick={toggle}>
          Change Theme
        </Button>
      </Header>
      <CanvasContainer>
        <LeftSide />
        <Main />
        <Side w={panel.rightSide.width} />
      </CanvasContainer>
    </>
  )
}

export default CavansPage
