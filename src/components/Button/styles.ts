import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  color: ${cores.branca};
  background-color: transparent;
  border: 2px solid ${cores.branca};
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  padding: 8px 16px;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  color: ${cores.branca};
  background-color: transparent;
  border: 2px solid ${cores.branca};
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  padding: 8px 16px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${cores.branca};
    color: ${cores.preta};
  }
`
