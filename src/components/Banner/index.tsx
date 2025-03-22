import { useEffect, useState } from 'react'

import { Imagem, Titulo, Precos } from './styles'

import Tag from '../Tag'
import Button from '../Button'

import { formatCurrencies } from '../ProductsList'

import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando ...</h3>
  }

  return (
    <>
      <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
        <div className="container">
          <Tag size="big">Destaque do Dia</Tag>
          <div>
            <Titulo>{game.name}</Titulo>
            <Precos>
              De <span>{formatCurrencies(game.prices.old)}</span> <br />
              por apenas {formatCurrencies(game.prices.current)}
            </Precos>
          </div>
          <Button
            type="link"
            to={`/product/${game.id}`}
            title="Clique aqui para aproveitar essa oferta"
          >
            Aproveitar
          </Button>
        </div>
      </Imagem>
    </>
  )
}

export default Banner
