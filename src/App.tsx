import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DrawBoardContextProvider } from './contexts/DrawBoard'
import { PanelStructureContextProvider } from './contexts/PanelStructure'
import CavansPage from './pages/CanvasPage'

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <PanelStructureContextProvider>
          <DrawBoardContextProvider>
            <CavansPage />
          </DrawBoardContextProvider>
        </PanelStructureContextProvider>
      </DndProvider>
    </>
  )
}

export default App
