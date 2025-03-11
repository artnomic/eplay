import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  position: relative;

  width: 100%;
  height: 560px;

  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  z-index: 0;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.15);
    z-index: -2;
  }

  .container {
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

// export const Imagem = styled.div`
//   position: relative;
//   width: 100%;
//   height: 560px;
//   display: block;
//   background-repeat: no-repeat;
//   background-size: cover;
//   font-weight: bold;

//   ::before {
//     content: 'DEBUG'; /* Teste visível */
//     color: red;
//     font-size: 20px;
//     background-color: rgba(
//       0,
//       0,
//       255,
//       0.5
//     ); /* Azul transparente para destacar */
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: 1; /* Ajuste para ficar na frente */
//   }
// `

export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
