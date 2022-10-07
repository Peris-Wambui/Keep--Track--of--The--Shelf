import React from "react";

function BookList() {
   return(
    <table  className='ui celled striped padded table'>
        <tbody>
            <tr>
                <th>
                    <h2 className='ui center aligned header'>Book Name</h2>
                </th>
                <th>
                    <h2 className='ui center aligned header'>Description</h2>
                </th>
                <th>
                    <h2 className='ui center aligned header'>Author</h2>
                </th>
            </tr>
        </tbody>
    </table>
   )
 
}


export default BookList;