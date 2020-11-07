import React from 'react'

export namespace ExternalComponents {
  export const TableLayout: InherentComponentProps = {
    style: {
      width: 200,
      height: 200,
    },
  }
  export const BoxLayout = {}
}

interface InherentComponentProps {
  style?: React.CSSProperties
  descrition?: string
  children?: InherentComponentProps[]
}
