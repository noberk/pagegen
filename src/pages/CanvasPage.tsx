import React from 'react'
import ChessPage from './ChessPage'
import { GRID16 } from '../assets/svg'
import {
  Aside,
  Box,
  Button,
  CanvasContainer,
  DashBox,
  DashCircle,
} from '../components/Layout'
import { DraggableSpanSlot, ElementSlot } from '../components/Interaction'
import { Rotate } from '../components/effect'
import { DragItemType } from '../constant'
import Draggable from 'react-draggable'

function CavansPage() {
  return (
    <>
      <CanvasContainer>
        <Aside>
          <div>
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
              <header>Components</header>
              <ElementSlot>
                <Rotate>🦄</Rotate>
              </ElementSlot>
            </div>
          </div>
        </Aside>
        <main
          style={{ height: 600, width: '100%', background: `url(${GRID16})` }}
        >
          <Box width={300} height={300}>
            <ChessPage knightPosition={[5, 5]} />
          </Box>
          <div style={{ width: 600, height: 600, background: 'white' , borderRadius:20 }}>
            <Draggable>
              <DashCircle style={{background:'red'}} />
            </Draggable>
          </div>
        </main>
      </CanvasContainer>
    </>
  )
}

export default CavansPage
