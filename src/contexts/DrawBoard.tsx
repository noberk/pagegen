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
    componentsTree: [<span>🐷</span>],
  })

  function push(node: React.ReactNode) {
    let newArr = { ...state }
    newArr.componentsTree.push(newArr)
    setState(newArr)
  }

  return (
    <DrawBoardContext.Provider
      value={useMemo(() => [state, { push }], [state, { push }])}
    >
      {children}
    </DrawBoardContext.Provider>
  )
}
