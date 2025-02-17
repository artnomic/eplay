import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="https://placehold.co/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas cum impedit
      laborum provident quaerat! Amet quis officia, nobis, nemo consequatur
      libero, tempora obcaecati incidunt repellendus ipsam quas optio velit
      tenetur?
    </Descricao>
  </Card>
)

export default Product
