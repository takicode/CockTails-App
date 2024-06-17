import React, { useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const useRefContainer = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = useRefContainer.current.value
    setSearchTerm(value)
  }
  return (
    <section className='section search'>
      <form onSubmit={handleSubmit} className='search-form'>
        <div className='form-control'>
          <label htmlFor='name' className='form-label'>
            search your favorite cocktail
          </label>
          <input
            type='text'
            ref={useRefContainer}
            id='name'
            className='form-input'
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
