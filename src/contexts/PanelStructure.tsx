import React, { createContext, useContext, useMemo, useState } from 'react'
import { isBuffer } from 'util'
import { PanelsDefinition, PANELS_CONFIG, PANELS_CONFIG2 } from '../settings/ui'

let narrow = false
const PanelStructureContext = createContext<
  [
    PanelsDefinition,
    {
      toggle(): void
    }
  ]
>({} as any)
export function usePanelStructure() {
  return useContext(PanelStructureContext)
}

export function PanelStructureContextProvider({ children }) {
  const [state, setState] = useState<PanelsDefinition>(PANELS_CONFIG)

  function toggle() {
    console.log(narrow)

    setState(narrow ? { ...PANELS_CONFIG } : { ...PANELS_CONFIG2 })
    narrow = !narrow
  }

  return (
    <PanelStructureContext.Provider
      value={useMemo(() => [state, { toggle }], [state, { toggle }])}
    >
      {children}
    </PanelStructureContext.Provider>
  )
}
