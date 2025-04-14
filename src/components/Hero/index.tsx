import { useDispatch } from 'react-redux'

import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'

import * as S from './styles'

import { add, open } from '../../store/reducers/cart'
import { formatCurrencies } from '../../utils'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formatCurrencies(game.prices.old)}</span>
            )}

            {game.prices.current && (
              <>Por {formatCurrencies(game.prices.current)}</>
            )}
          </p>
          {game.prices.current ? (
            <Button
              type="button"
              title="Clique aqui para adicionar ao carrinho"
              variant="primary"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          ) : (
            <Button type="button" title="Ainda não Lançado" variant="secondary">
              Em Breve!
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
