import React, { createContext, useContext, useMemo, useState } from 'react'
import Draggable from 'react-draggable'
import { Unit } from '../entities/unit'

type DrawBoardContextProps = {
  componentsTree: React.ReactNode[]
  unitProperties: Unit[]
}

const DrawBoardContext = createContext<
  Partial<
    [
      DrawBoardContextProps,
      {
        push: (node: React.ReactNode, unit: Unit) => void
        addUnit: <P>(unit: Unit<P>) => void
        addProperty: () => void
        getSelectItem: () => Unit[]
      }
    ]
  >
>([])
export function useDrawBoardContext() {
  return useContext(DrawBoardContext)
}

export function DrawBoardContextProvider({ children }) {
  const [state, setState] = useState<DrawBoardContextProps>({
    componentsTree: [],
    unitProperties: [],
  })

  function push(node: React.ReactNode, unit: Unit) {
    let newArr = [...state.componentsTree]
    newArr.push(node)
    state.componentsTree = newArr
    setState({ ...state })
  }
  function getSelectItem() {
    return state.unitProperties
  }
  function addProperty() {}
  function addUnit<D>(unit: Unit<D>) {
    const Unit = unit.component as typeof React.Component

    push(
      <Draggable
        onDrag={(e, d) => {
          console.log(d, getSelectItem())

          // if (unit !== void 0) {
          //   console.log(unit, 'mouse drag')
          //   unit.point = {
          //     x: d.x,
          //     y: d.y,
          //   }
          //   console.log(unit.point)
          // }
        }}
      >
        <Unit style={unit.style} onClick={() => {}} />
      </Draggable>,
      unit
    )
  }
  return (
    <DrawBoardContext.Provider
      value={useMemo(
        () => [state, { push, addUnit, getSelectItem, addProperty }],
        [state, { push, addUnit, getSelectItem, addProperty }]
      )}
    >
      {children}
    </DrawBoardContext.Provider>
  )
}
