import { Filters } from './Filters'
import { Cart } from './Cart'

import './Header.css'

export function Header() {
  return (
    <header>
      <Filters />

      <Cart />
    </header>
  )
}
