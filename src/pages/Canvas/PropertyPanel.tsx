import React from 'react'

import { Side } from '../../components/Layout'
import { usePanelStructure } from '../../contexts/PanelStructure'

export default function () {
  const [panel, { toggle }] = usePanelStructure()
  return (
    <Side w={panel.rightSide.width}>
      <div>
        <header>Event</header>
        <div>
          <select name="" id="">
            <option>none</option>
            <option>Click</option>
            <option>Hover</option>
          </select>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
    </Side>
  )
}
