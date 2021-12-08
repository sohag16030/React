import React from 'react'

const Book = ({ img, title, author }) => {
  //attribute,eventHandler
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

export default Book
