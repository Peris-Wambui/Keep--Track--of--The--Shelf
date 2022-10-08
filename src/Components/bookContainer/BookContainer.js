import React, { useEffect, useState } from 'react'
import AddBookForm from '../addbooks/AddBookForm'
import Books from '../books/Books'
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

    // const dispaySearchBook =books.filter((book)=>
    // book.description.includes (searchBook))

    // console.log(dispaySearchBook)

    

    return(
        <div>
        <SearchBook search ={searchBook} onSearchChange={searchFilteredBook}/>
        <AddBookForm/>
            {books.filter((book)=>{
        if(searchBook === ""){
          return book;
        }else if(book.name.toLowerCase().includes(searchBook.toLowerCase())){
          return book;
        }
        return false
      })?.map((dispaySearchBook) => (
        <Books key={dispaySearchBook.id}  book={dispaySearchBook} />
      ))}


            {/* <BookList 
            book={dispaySearchBook}/> */}
        </div>
    )

}
export default BookContainer;