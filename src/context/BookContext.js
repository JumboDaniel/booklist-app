import React, { useState, createContext, useEffect } from 'react';
import {v4 as uuid} from 'uuid'

export const BookContext= createContext();

const BookContextProvider = (props) => {
    const[books, setBooks]=useState([
 
    ]);
    const addBook =(title, author)=>{
        setBooks([...books, {title:title, author:author, id:uuid()}])
    };
    const removeBook = (id)=>{
        setBooks([...books.filter(book=> book.id !== id)])
    };
    useEffect(()=>{
        localStorage.setItem('book', JSON.stringify(books))
    }, [books])  
    return ( 
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;