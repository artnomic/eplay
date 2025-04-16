import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/">
            <h1>
              <img src={logo} alt="EPLAY" />
            </h1>
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link title="Acesse a seção de Categorias" to="/categories">
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Acesse a seção de Novidades"
                  to="/#coming-soon"
                >
                  Novidades
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink title="Acesse a seção de Promoções" to="/#on-sale">
                  Promoções
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton role="button" onClick={openCart}>
          {items.length}
          <span> - produto(s)</span>
          <img src={cartIcon} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? '__is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              title="Acesse a seção de Categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Acesse a seção de Novidades"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Novidades
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Acesse a seção de Promoções"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
