import React from 'react'

import { Side } from '../../components/Layout'
import { useDrawBoardContext } from '../../contexts/DrawBoard'
import { usePanelStructure } from '../../contexts/PanelStructure'

export default function () {
  const [panel, { toggle }] = usePanelStructure()
  const [state, methods] = useDrawBoardContext()

  const unitData = methods?.getSelectItem()[0]
  console.log('property panel',unitData);
  
  return (
    <Side w={panel.rightSide.width}>
      id : {unitData?.id ?? ''}
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
            top: <input type="text" value={unitData?.style.top ?? 0} />{' '}
          </div>
          <div>
            left: <input type="text" value={unitData?.style.left ?? 0} />
          </div>
          <div>
            width: <input type="text" value={unitData?.style.width ?? 0} />
          </div>
          <div>
            height: <input type="text" value={unitData?.style.height ?? 0} />
          </div>
        </div>
      </div>
    </Side>
  )
}
