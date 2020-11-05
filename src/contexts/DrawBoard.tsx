import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

type DrawBoardContextProps = {
  componentsTree: React.ReactNode[]
}

const DrawBoardContext = createContext<
  Partial<
    [
      DrawBoardContextProps,
      {
        push: (node: React.ReactNode) => void
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

  return (
    <DrawBoardContext.Provider
      value={useMemo(() => [state, { push }], [state, { push }])}
    >
      {children}
    </DrawBoardContext.Provider>
  )
}
