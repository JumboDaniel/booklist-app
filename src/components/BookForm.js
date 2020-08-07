import React, {useContext, useState } from 'react' 
import { BookContext } from '../context/BookContext';


const NewBookForm = () => {
    const{ addBook }= useContext(BookContext);
    const [title, setTitle] =useState('')
    const [author, setAuthor] = useState('')
    const handle = (e) => {
    e.preventDefault() 
    addBook(title, author)
    setTitle('')
    setAuthor('')
    }
    return ( 
        <form  onSubmit={handle}>
            <input type='text' placeholder='title' value={title} 
            onChange={(e) => setTitle(e.target.value)} required/>

            <input type='text' placeholder='author'value={author} 
            onChange={(e) => setAuthor(e.target.value)} required/>

            <input type='submit' value='addBook'/> 
        </form>
     );
}
 
export default NewBookForm ;