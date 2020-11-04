import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import CavansPage from './pages/CanvasPage'

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <CavansPage />
      </DndProvider>
    </>
  )
}

export default App
