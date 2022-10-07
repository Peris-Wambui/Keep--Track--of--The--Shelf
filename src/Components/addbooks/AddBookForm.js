import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

function AddBookForm() {
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [bookName, setBookName] =('')
    

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }

  const handleNameChange = (event) => {
    setBookName(event.target.value)
  }


  const handleChange = (e) => {
    e.preventDefault()
    const newBook = {
      id: uuid(),
      bookName:bookName,
      description: description,
      author:author
    
    }
    fetch('http://localhost:8001/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then((resp) => resp.json())
      .then((newBook) => console.log(newBook))
  }

  return (
    <div className='ui segment' onSubmit={handleChange}>
      <form className='ui form'>
        <div className='inline fields'>
          <input
            type='text'
            name='bookName'
            placeholder='Book Name'
            value={bookName}
            onChange={handleNameChange}
            required
          />
          <input
            type='text'
            name='description'
            placeholder='Description'
            value={description}
            onChange={handleDescriptionChange}
            required
          />
          <input
            type='text'
            name='author'
            placeholder='Author'
            value={author}
            onChange={handleAuthorChange}
            required
          />

        </div>
        <button className='ui button' type='submit'>
          Add Book
        </button>
      </form>
    </div>
  )
}


export default AddBookForm;