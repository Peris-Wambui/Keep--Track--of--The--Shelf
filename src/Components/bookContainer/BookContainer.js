import React, { useEffect, useState } from 'react'
import AddBookForm from '../addbooks/AddBookForm'
import BookList from '../bookList/BookList'


function BookContainer() {
    const [searchBook, setSearchBook]=useState('')
    const [books,setBooks]=useState([])
    useEffect(()=>{
        fetch("http://localhost:8001/books")
        .then ((response)=>response.json())
        .then((data)=>{
            setBooks(data)
        })
    },[])
    
    const searchFilteredBook=(e) =>{
        setSearchBook(e.targert.value)
    }
    const dispaySearchBook =books.filter((book)=>
    book.description.toLowerCase())

    return(
        <div>
            <AddBookForm/>
            <BookList 
            book={dispaySearchBook}/>
        </div>
    )

}
export default BookContainer;