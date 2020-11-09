import React from 'react'
import { useDrop } from 'react-dnd'
import { Button } from '../components/BasePart'
import { CanvasContainer, Header, Side } from '../components/Layout'
import { DragComponentItemType } from '../constants'
import { usePanelStructure } from '../contexts/PanelStructure'
import ComponentPanel from './Canvas/ComponentPanel'
import Main from './Canvas/Main'
import PropertyPanel from './Canvas/PropertyPanel'

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
        <ComponentPanel />
        <Main />
        <PropertyPanel />
      </CanvasContainer>
    </>
  )
}

export default CavansPage
