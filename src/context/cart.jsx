import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const indexOfProduct = cart.findIndex(item => item.id === product.id)

    if (indexOfProduct >= 0) {
      const newCart = structuredClone(cart)
      newCart[indexOfProduct].quantity += 1
      return setCart(newCart)
    }

    setCart(prevState => [
      ...prevState,
      {
        ...product,
        quantity: 1
      }])
  }

  const removeFromCart = (product) => {
    const newCart = cart.filter(item => item.id !== product.id)
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const decrementQuantity = (product) => {
    const indexOfProduct = cart.findIndex(item => item.id === product.id)
    if (indexOfProduct >= 0) {
      const newCart = structuredClone(cart)
      if (newCart[indexOfProduct].quantity > 1) {
        newCart[indexOfProduct].quantity -= 1
        return setCart(newCart)
      }
      if (newCart[indexOfProduct].quantity === 1) {
        removeFromCart(product)
      }
    }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  )
}
