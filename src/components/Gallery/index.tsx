import { useState } from 'react'

import { GalleryItem } from '../../pages/Home'

import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import fechar from '../../assets/images/fechar.png'

import { Action, Item, Items, Modal, ModalContent } from './styles'

interface ModalState extends GalleryItem {
  isVisible: boolean
}

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url

    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom

    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Items>
        {items.map((media, index) => (
          <Item
            key={media.url}
            onClick={() => {
              setModal({
                isVisible: true,
                type: media.type,
                url: media.url
              })
            }}
          >
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
      <Modal className={modal.isVisible ? '__is_visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Icone de Fechar"
              onClick={() => closeModal()}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Gallery
