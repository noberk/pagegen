import React from 'react'
import { CanvasContainer, Side } from '../components/Layout'
import LeftSide from './Canvas/LeftSide'
import Main from './Canvas/Main'

function CavansPage() {
  return (
    <CanvasContainer>
      <LeftSide />
      <Main />
      <Side style={{ width: 120 }} />
    </CanvasContainer>
  )
}

export default CavansPage
