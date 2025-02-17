import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        <Product
          category="Ação"
          description="teste"
          image="//placehold.co/222x250"
          infos={['-10%', 'R$ 150,00']}
          title="Nome do Jogo"
          system="Windows"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.co/222x250"
          infos={['-10%', 'R$ 150,00']}
          title="Nome do Jogo"
          system="Windows"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.co/222x250"
          infos={['-10%', 'R$ 150,00']}
          title="Nome do Jogo"
          system="Windows"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.co/222x250"
          infos={['-10%', 'R$ 150,00']}
          title="Nome do Jogo"
          system="Windows"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
