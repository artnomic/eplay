import { Game } from '../pages/Home'

export const formatCurrencies = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((acc, currentItem) => {
    if (currentItem.prices.current) {
      return (acc += currentItem.prices.current)
    }

    return 0
  }, 0)
}
