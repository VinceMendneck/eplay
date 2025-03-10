import styled from 'styled-components'
import { TagContainer } from '../Tag/style'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0 auto;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
    margin: 0 auto;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  margin-left: -236px;
`
export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;
  margin-left: -236px;

  span {
    text-decoration: line-through;
  }
`
export const ButtonPosition = styled.div`
  margin-right: 0;
`
