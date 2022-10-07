import React from "react";

function Book({book}) {
    return(
        <tr>
            <td>{book.bookName}</td>
            <td>{book.description}</td>
            <td>{book.author}</td>
        </tr>
    )
}


export default Book;