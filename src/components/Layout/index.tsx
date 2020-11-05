import styled from 'styled-components'
import { visibleHeight } from '../../common/browser'

export const CanvasContainer = styled.div`
  width: 100%;
  height: ${visibleHeight()}px;
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

// Don't modify this function
export const Side = styled.aside`
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 3px;
  width: 200px;
  overflow: hidden;
`

export const DashBox = styled.span`
  width: 100px;
  height: 100px;
  border: 1px solid gray;
  border-style: dashed;
  display: inline-block;
`
export const DashCircle = styled(DashBox)`
  border-radius: 50%;
`
export const Button = styled.button<{ primary?: boolean }>`
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  border: 2px solid palevioletred;
  border-radius: 3px;
`
