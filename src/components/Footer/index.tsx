import {
  FooterContainer,
  FooterHeader,
  FooterList,
  FooterListContainer,
  FooterText
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <FooterHeader>Categorias</FooterHeader>
      <FooterList>
        <FooterListContainer>
          <a href="#">RPG</a>
        </FooterListContainer>
        <FooterListContainer>
          <a href="#">Ação</a>
        </FooterListContainer>
        <FooterListContainer>
          <a href="#">Aventura</a>
        </FooterListContainer>
        <FooterListContainer>
          <a href="#">Esportes</a>
        </FooterListContainer>
        <FooterListContainer>
          <a href="#">Simulação</a>
        </FooterListContainer>
        <FooterListContainer>
          <a href="#">Estratégia</a>
        </FooterListContainer>
        <FooterListContainer>
          <a href="#">FPS</a>
        </FooterListContainer>
      </FooterList>
    </div>
    <div className="container">
      <FooterHeader>Acesso Rápido</FooterHeader>
      <FooterList>
        <FooterListContainer>
          <a href="#">Novidades</a>
        </FooterListContainer>
        <FooterListContainer>
          <a href="#">Promoções</a>
        </FooterListContainer>
        <FooterListContainer>
          <a href="#">Em breve</a>
        </FooterListContainer>
      </FooterList>
    </div>
    <div className="container">
      <FooterText>
        {currentYear} - &copy; E-PLAY Todos os direitos reservados
      </FooterText>
    </div>
  </FooterContainer>
)

export default Footer
