import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { setSearchValue } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.elements.search.value
    if (!value) return
    setSearchValue(value)
  }
  return (
    <section className='search-form'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          placeholder='cat'
          className='search-input'
        />
        <button type='submit' className='btn'>
          search
        </button>
      </form>
    </section>
  )
}

export default SearchForm
