import React from 'react'
import { useDrop } from 'react-dnd'
import Draggable from 'react-draggable'
import { GRID16 } from '../../assets/svg'
import { visibleHeight } from '../../common/browser'
import { Box, Button, DashBox, DashCircle } from '../../components/Layout'
import { DragComponentItemType } from '../../constants'
import { useDrawBoardContext } from '../../contexts/DrawBoard'
import ChessPage from '../ChessPage'
export default function () {
  const [state, methods] = useDrawBoardContext()
  const [{ isOver, didDrop }, drop] = useDrop({
    accept: [DragComponentItemType.Box],
    drop: (item, monitor) => {
      if (item.type === DragComponentItemType.Box) {
        console.log(item)

        methods?.push(
          <Draggable>
            <DashBox />
          </Draggable>
        )
      }
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      didDrop: monitor.didDrop(),
    }),
  })
  return (
    <main
      ref={drop}
      style={{
        height: visibleHeight(),
        width: '100%',
        background: `url(${GRID16})`,
      }}
    >
      <Draggable>
        <DashCircle style={{ background: 'red' }} />
      </Draggable>
      <Box width={300} height={300}>
        <ChessPage knightPosition={[5, 5]} />
      </Box>

      {state?.componentsTree}
    </main>
  )
}
