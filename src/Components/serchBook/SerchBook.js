import React from 'react'

function SerchBook() {
    return (
        <div className='ui large fluid icon input'>
          <input
            type='text'
            placeholder='Search your book'
            onChange={onSearchChange}
            value={search}
          />
          <i className='circular search link icon'></i>
        </div>
      )
}


export default SerchBook;