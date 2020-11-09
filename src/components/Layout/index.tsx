import styled from 'styled-components'
import { visibleHeight } from '../../common/browser'
import { Fillet } from '../DecoratePart'

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
export const Side = styled.aside<{ w?: number }>`
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 3px;
  width: ${({ w }) => w ?? 100}px;
  overflow: hidden;
`

export const DashBox = styled.span`
  width: 100px;
  height: 100px;
  border: 5px groove red;
  border-style: dashed;
  display: inline-block;
`
export const DashCircle = styled(DashBox)`
  border-radius: 50%;
`

export const Header = styled.header<{ h: number }>`
  height: ${({ h }) => h ?? 100}px;
  ${Fillet as any}
`
