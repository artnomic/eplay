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

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGames}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductsList
        games={soonGames}
        title="Em Breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
