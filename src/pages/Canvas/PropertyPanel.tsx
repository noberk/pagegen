import React from 'react'

import { Side } from '../../components/Layout'
import { usePanelStructure } from '../../contexts/PanelStructure'

export default function () {
  const [panel, { toggle }] = usePanelStructure()
  return (
    <Side w={panel.rightSide.width}>
      id : ?
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
      <div>
        <header>properties</header>
        <div></div>
        <div>
          <div>
            top: <input type="text" />{' '}
          </div>
          <div>
            left: <input type="text" />
          </div>
          <div>
            width: <input type="text" />
          </div>
          <div>
            height: <input type="text" />
          </div>
        </div>
      </div>
    </Side>
  )
}
