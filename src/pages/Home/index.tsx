import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useEffect, useState } from 'react'

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
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    // Promoções
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))

    // Em Breve
    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title="Promoções" background="gray" />
      <ProductsList games={emBreve} title="Em Breve" background="black" />
    </>
  )
}

export default Home
