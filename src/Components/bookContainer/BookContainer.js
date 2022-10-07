import React, { useEffect, useState } from 'react'
import AddBookForm from '../addbooks/AddBookForm'


function BookContainer() {

    const [books,setBooks]=useState([])
    useEffect(()=>{
        fetch("http://localhost:8001/books")
        .then ((response)=>response.json())
        .then((data)=>{
            setBooks(data)
        })
    },[])

    return(
        <div>
            <AddBookForm/>
        </div>
    )

}
export default BookContainer;