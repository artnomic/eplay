import { Game } from '../../pages/Home'
import Product from '../Product'

import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

export const formatCurrencies = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getGameTags = (game: Game) => {
  const tags = []

  if (game.release_date) tags.push(game.release_date)

  if (game.prices.discount) tags.push(`${game.prices.discount}%`)

  if (game.prices.current) tags.push(formatCurrencies(game.prices.current))

  return tags
}

const ProductsList = ({ background, title, games }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              category={game.details.category}
              description={game.description}
              image={game.media.thumbnail}
              infos={getGameTags(game)}
              title={game.name}
              system={game.details.system}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
