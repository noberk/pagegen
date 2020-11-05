import { css } from 'styled-components'

export const Fillet = css<{ px: number }>`
  border-radius: ${({ px }) => px ?? 4}px;
  background-color: #fff;
  border: 1px solid gray;
`
