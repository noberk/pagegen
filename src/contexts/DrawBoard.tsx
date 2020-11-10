import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react'
import Draggable from 'react-draggable'
import { Unit } from '../entities/unit'

type DrawBoardContextProps = {
  componentsTree: React.ReactNode[]
}

const DrawBoardContext = createContext<
  Partial<
    [
      DrawBoardContextProps,
      {
        push: (node: React.ReactNode) => void
        addUnit: <D>(unit: Unit<D>) => void
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
  })

  function push(node: React.ReactNode) {
    let newArr = [...state.componentsTree]
    newArr.push(node)
    state.componentsTree = newArr
    setState({ ...state })
  }
  function addUnit<D>(unit: Unit<D>) {
    const Unit = unit.component as typeof React.Component

    push(
      <Draggable>
        <Unit style={{ position: 'absolute' }} />
      </Draggable>
    )
    console.log(unit)
  }
  return (
    <DrawBoardContext.Provider
      value={useMemo(() => [state, { push, addUnit }], [
        state,
        { push, addUnit },
      ])}
    >
      {children}
    </DrawBoardContext.Provider>
  )
}
