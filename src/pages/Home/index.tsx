import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

// API utilizada durante as aulas
// https://fake-api-tau.vercel.app/api/eplay/destaque
// https://fake-api-tau.vercel.app/api/eplay/em-breve
// https://fake-api-tau.vercel.app/api/eplay/promocoes
// https://fake-api-tau.vercel.app/api/eplay/acao
// https://fake-api-tau.vercel.app/api/eplay/esportes
// https://fake-api-tau.vercel.app/api/eplay/simulacao
// https://fake-api-tau.vercel.app/api/eplay/rpg
// https://fake-api-tau.vercel.app/api/eplay/luta
// https://fake-api-tau.vercel.app/api/eplay/jogos/ID - ID vai do 1 ao 19

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList
          games={onSaleGames}
          title="Promoções"
          background="gray"
          id="on-sale"
        />
        <ProductsList
          games={soonGames}
          title="Em Breve"
          background="black"
          id="coming-soon"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
