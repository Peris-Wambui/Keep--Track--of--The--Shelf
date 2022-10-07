import React, { useEffect, useState } from 'react'
import AddBookForm from '../addbooks/AddBookForm'
import BookList from '../bookList/BookList'
import SearchBook from '../searchBook/SearchBook'


function BookContainer() {
    const [searchBook, setSearchBook]=useState('')
    const [books,setBooks]=useState([])
    useEffect(()=>{
        fetch("https://keeping-track-of-my-shelf.herokuapp.com/books")
        .then ((response)=>response.json())
        .then((data)=>{
            setBooks(data)
        })
    },[])
    
    const searchFilteredBook=(e) =>{
        setSearchBook(e.target.value)
    }

    const dispaySearchBook =books.filter((book)=>
    book.description.toLowerCase().includes (searchBook.toLowerCase()))

    console.log(dispaySearchBook)

    return(
        <div>
            <SearchBook search ={searchBook} onSearchChange={searchFilteredBook}/>
            <AddBookForm/>
            <BookList 
            book={dispaySearchBook}/>
        </div>
    )

}
export default BookContainer;