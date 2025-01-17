import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id, image, name, glass, info}) => {

  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/singlecocktail/${id}`}className='btn btn-primary'>Details</Link>
      </div>
      
    </article>
  )
}

export default Cocktail
