import { Action, Item, Items, Modal, ModalContent } from './styles'

import zelda from '../../assets/images/zelda.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import spiderman from '../../assets/images/banner_full.webp'

import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import fechar from '../../assets/images/fechar.png'
import { useState } from 'react'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/MsUzTC0HhcM?si=GE8Cwp5423WevjPB'
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/MsUzTC0HhcM?si=GE8Cwp5423WevjPB'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Galery = ({ defaultCover, name }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url

    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom

    return play
  }

  return (
    <>
      <Items>
        {mock.map((media, index) => (
          <Item key={media.url} onClick={() => setModalEstaAberto(true)}>
            <img
              src={getMediaCover(media)}
              alt={`Mídia ${index + 1} de {${name}`}
            />
            <Action>
              <img
                src={getMediaIcon(media)}
                alt="Clique aqui para maximizar a mídia"
              />
            </Action>
          </Item>
        ))}
      </Items>
      <Modal className={modalEstaAberto ? '__is_visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="Icone de Fechar" />
          </header>
          <img src={spiderman} alt="" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Galery
