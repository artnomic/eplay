import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${cores.cinza};
  padding: 32px 0;
  font-size: 14px;
`

export const FooterHeader = styled.h4`
  color: ${cores.branca}
  font-weight: bold;
  font-size: 16px;
`

export const FooterList = styled.ul`
  display: flex;
  padding-bottom: 64px;
`

export const FooterListContainer = styled.li`
  padding-right: 8px;
  padding-top: 16px;

  a {
    color: ${cores.cinzaClaro};
    text-decoration: none;
  }
`

export const FooterText = styled.p`
  font-weight: 400px;
`
