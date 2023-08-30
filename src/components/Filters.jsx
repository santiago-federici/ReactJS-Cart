import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters() {
  const { filters, setFilters } = useFilters()
  const minPriceId = useId()
  const categoryId = useId()

  const handleChangeMinPrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <>
      <div className="price-filter">
        <label htmlFor={minPriceId}>MinPrice</label>
        <input
          id={minPriceId}
          type="range"
          min='0'
          max='1000'
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <p>${filters.minPrice}</p>
      </div>

      <div className="category-filter">
        <label htmlFor={categoryId}>Category</label>
        <select id={categoryId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
          <option value='home-decoration'>Home Decoration</option>
          <option value='fragrances'>Fragrances</option>
          <option value='skincare'>Skincare</option>
          <option value='groceries'>Groceries</option>
        </select>
      </div>
    </>
  )
}
