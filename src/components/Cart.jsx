import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Cart() {
  const { cart, addToCart, removeFromCart, clearCart, decrementQuantity } = useCart()
  const cartId = useId()

  return (
    <>
      <label htmlFor={cartId} className='cart-icon'>
        <CartIcon />
      </label>
      <input type='checkbox' hidden id={cartId} />

      <div className='cart-body'>
        <ul className='cart-cards-container'>
          {
            cart.map(product => (
              <li className='card' key={product.id}>
                <img src={product.thumbnail} className='card-img' />
                <strong className='card-info'>{product.title} - ${product.price}</strong>
                <div className='quantity-container'>
                  <strong className='btn-quantity' onClick={() => decrementQuantity(product)}>-</strong>
                  <span>Quantity: {product.quantity}</span>
                  <strong className='btn-quantity' onClick={() => addToCart(product)}>+</strong>
                </div>
                <button onClick={() => removeFromCart(product)}>
                  <RemoveFromCartIcon />
                </button>
              </li>
            ))
          }
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </div >
    </>
  )
}
