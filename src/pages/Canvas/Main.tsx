import React from 'react'
import Draggable from 'react-draggable'
import { GRID16 } from '../../assets/svg'
import { visibleHeight } from '../../common/browser'
import { Box, DashCircle } from '../../components/Layout'
import { useDrawBoardContext } from '../../contexts/DrawBoard'
import ChessPage from '../ChessPage'
export default function () {
  const [state] = useDrawBoardContext()

  return (
    <main
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
      </Box>{' '}
      {state?.componentsTree}
    </main>
  )
}
