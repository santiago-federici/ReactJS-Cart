import { useContext } from 'react'
import { CartContext } from '../context/cart'

export function useCart() {
  const context = useContext(CartContext)

  return context
}
