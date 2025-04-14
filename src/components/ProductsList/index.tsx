import { Game } from '../../pages/Home'
import { formatCurrencies } from '../../utils'
import Product from '../Product'

import * as S from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
}

export const getGameTags = (game: Game) => {
  const tags = []

  if (game.release_date) tags.push(game.release_date)

  if (game.prices.discount) tags.push(`${game.prices.discount}%`)

  if (game.prices.current) tags.push(formatCurrencies(game.prices.current))

  return tags
}

const ProductsList = ({ background, title, games, id }: Props) => {
  return (
    <S.Container id={id} background={background}>
      <div className="container">
        <S.Title>{title}</S.Title>
        <S.List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                title={game.name}
                category={game.details.category}
                system={game.details.system}
                description={game.description}
                infos={getGameTags(game)}
                image={game.media.thumbnail}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
