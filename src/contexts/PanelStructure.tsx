import React, { createContext, useContext, useMemo, useState } from 'react'
import { PanelsDefinition, PANELS_CONFIG } from '../settings/ui'

const PanelStructureContext = createContext<PanelsDefinition>({} as any)
export function usePanelStructure() {
  return useContext(PanelStructureContext)
}

export function PanelStructureContextProvider({ children }) {
  const [state, setState] = useState<PanelsDefinition>(PANELS_CONFIG)

  return (
    <PanelStructureContext.Provider value={state}>
      {children}
    </PanelStructureContext.Provider>
  )
}
