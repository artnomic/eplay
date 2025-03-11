import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'

import { Banner, Infos } from './styles'
import { formatCurrencies } from '../ProductsList'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>

      <Infos>
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
          >
            Adicionar ao carrinho
          </Button>
        ) : (
          <Button type="button" title="Ainda não Lançado" variant="secondary">
            Em Breve!
          </Button>
        )}
      </Infos>
    </div>
  </Banner>
)

export default Hero
