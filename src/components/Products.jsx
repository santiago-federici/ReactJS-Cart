import { useCart } from '../hooks/useCart'
import { AddToCartIcon } from './Icons'
import './Products.css'

export function Products({ products }) {
  const { addToCart } = useCart()

  return (
    <main className='wrapper flow'>
      <ul className='cards-container'>

        {
          products.map(product => (

            <li className='card' key={product.id}>
              <img src={product.thumbnail} className='card-img' />
              <strong className='card-info'>{product.title} - ${product.price}</strong>
              <button onClick={() => addToCart(product)}><AddToCartIcon /></button>
            </li>
          ))
        }
      </ul>
    </main>
  )
}
