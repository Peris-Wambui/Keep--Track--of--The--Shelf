import React, { useEffect, useState } from 'react'



function BookContainer() {

    const [books,setBooks]=useState([])
    useEffect(()=>{
        fetch("http://localhost:8001/books")
        .then ((response)=>response.json())
        .then((data)=>{
            setBooks(data)
        })
    },[])

}
export default BookContainer;