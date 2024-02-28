import React from 'react'

function Tour({ id, image, info, name, price, removeTour }) {
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>{info}</p>
      </div>
      <button 
        type='button' 
        className='btn btn-block delete-btn' 
        onClick={() => removeTour(id)}
      >
            Avoid this Tour
      </button>
    </article>
  )
}

export default Tour


// img = image

// {name}

{/* <p>{price}</p> */}