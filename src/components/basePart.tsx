import styled from 'styled-components'

export const Button = styled.button<{ primary?: boolean }>`
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  border: 2px solid palevioletred;
  border-radius: 3px;
`
