import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Game } from '../Home'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

const Product = () => {
  const { id } = useParams()

  const [game, setGame] = useState<Game>()

  useEffect(() => {
    // Destaque
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [id])

  if (!game) {
    return <h3>Carregando ...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o Jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b> {game.details.publisher} <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ').toLowerCase()}. As opções de áudio
          e legendas podem ser ajustadas nas configurações do jogo.
        </p>
      </Section>
      <Section title="Galeria" background="black">
        <Gallery
          defaultCover={game.media.cover}
          name={game.name}
          items={game.media.gallery}
        />
      </Section>
    </>
  )
}

export default Product
