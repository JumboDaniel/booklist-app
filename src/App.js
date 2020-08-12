import React from 'react';
import BookContextProvider from './context/BookContext';
import Navbar from './components/Navbar';
import Booklist from './components/BookList';
import NewBookForm from './components/BookForm';


function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar/>
        <Booklist/>
        <NewBookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
       