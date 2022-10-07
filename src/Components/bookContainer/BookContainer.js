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

    const dispaySearchBook =books.filter((book)=>
    book.description.toLowerCase().includes(searchBook.toLowerCase))

    return(
        <div>
            <AddBookForm/>
            {/* <BookList/> */}
        </div>
    )

}
export default BookContainer;