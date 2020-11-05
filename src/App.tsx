import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DrawBoardContextProvider } from './contexts/DrawBoard'
import CavansPage from './pages/CanvasPage'

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <DrawBoardContextProvider>
          <CavansPage />
        </DrawBoardContextProvider>
      </DndProvider>
    </>
  )
}

export default App
