import React, { useState,useEffect, useLayoutEffect} from 'react';
import './BookLibrary.css';


const BookLibrary = () => {
   const [books, setBooks]=  useState([]);
   const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('https://openlibrary.org/people/mekBot/books/want-to-read.json');
               
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
                const booksData = await response.json()
                console.log(booksData)
                setBooks(booksData.reading_log_entries);
            } catch (error){
                setError(error.message)
            } finally {
                setLoading(false);
            }
        }
        fetchBooks()

    }, [])

    if(loading) {
        return <div className='loading'>Loadingg.....</div>
    }

    if(error) {
        return <div className="error">Error: {error}</div>;
    }

    console.log({books})
    

    return (
        <div className='container'>
        <h1 className='heading'>Book Shop Reading Logs</h1>
        <table className='table'>
            <thead>
            <th>Title</th>
            <th>Authors</th>
            <th>First Publish Year</th>
            <th>Logged Date</th>
            <th>Cover Image</th>
            </thead>
            <tbody>
                {books.map((book) => (
                    <tr key={book.work.key}>
                        <td>{book.work.title}</td>
              <td>{book.work.author_names.join(', ')}</td>
              <td>{book.work.first_publish_year}</td>
              <td>{book.logged_date}</td>
              <td>
                {book.work.cover_id ? (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.work.cover_id}-S.jpg`}
                    alt={book.work.title}
                    className="cover-image"
                  />
                ) : (
                  'No Cover'
                )}
              </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )

}

export default BookLibrary;
