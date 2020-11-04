import styled, { keyframes } from 'styled-components'

export const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  touch-action: none;
  overflow: auto;
  background-color: #ffffff;
  outline: none;
  display: flex;
`
export const Box = styled.div<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`
export const Div = styled.div``

export const Aside = styled.aside`
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 3px;
  width: 200px;
  overflow: hidden;
`

export const Button = styled.button<{ primary?: boolean }>`
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  border: 2px solid palevioletred;
  border-radius: 3px;
`
