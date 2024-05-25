import React, { useState,useEffect,useRef, useLayoutEffect} from 'react';
import {useFetch} from './customHooks/fetchHook';
import './BookLibrary.css';

const BookLibrary = () => {
    // useFetch: to handle api calls and managing erros and loading states
    // uBookDetails: To fetch book details when a book is selected.
    // useFilter: To handle filtering of reading logs based on user input

  const [books, setBooks]=  useState([]);
  const [bookDetails, setBookDetails]=  useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [filterValue, setFilterValue] = useState('');
  const valueOfFilter = useRef(null);

  const {data, loading, error} = useFetch("https://openlibrary.org/people/mekBot/books/want-to-read.json")

console.log(data, loading, error);

//    useEffect(() => {
//         const {data, loading, error} = useFetch("cats,url")
//         if(error){}

//     }, [])

    useEffect(() => {
        if(!selectedBook) return;        
        const fetchBookDetails = async () => {
            try {
                const titleConfigured= selectedBook.title.replace(" ", '+');
                const fetchedData = await fetch(`https://openlibrary.org/search.json?q=${titleConfigured}`)
             if (!fetchedData.ok){
                throw new Error('Network response was not ok');
             }
             const data = await fetchedData.json();
             if (data.docs && data.docs.length > 0){
                setBookDetails(data)
             } else {
                setBookDetails(null);
             }

            } catch(error) {
                console.log("Error message is",error.message )
            } 
        }
        fetchBookDetails()
    }, [selectedBook])

  

    const handleSelectBook = (title) => {
setSelectedBook(title);
    }

    const handleCloseModal = () => {
        setSelectedBook(null);
        setBookDetails(null)
    }

    const handleSearchClick = () =>
        {
            setFilterValue(valueOfFilter.current);
        }


    if(loading && !data) {
        return <div className='loading'>Loadingg.....</div>
    }

    if(error) {
        return <div className="error">Error: {error}</div>;
    }

    const filteredBooks = data ? data.filter((book) =>
        book.work.title.toLowerCase().includes(filterValue.toLowerCase()),
      ) : [];



      
    return (
        <div className='container'>
        <h1 className='heading'>Book Shop Reading Logs</h1>
        <div className="autocomplete">
            <input
              type="text"
              ref={valueOfFilter}
            //   value={filterValue}
              placeholder="Search products..."
              onChange={(e) => (valueOfFilter.current= e.target.value)}

            />
            <button onClick={handleSearchClick }>Search</button>
          </div>
        <table className='table'>
            <thead>
            <th>Select</th>
            <th>Title</th>
            <th>Authors</th>
            <th>First Publish Year</th>
            <th>Logged Date</th>
            <th>Cover Image</th>
            </thead>
            <tbody>
                {filteredBooks.map((book) => (
                    <tr key={book.work.key}>
                        <button onClick={() => handleSelectBook(book.work)}>Select</button>
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
        { selectedBook && bookDetails && <BookDetailsModal bookDetails={bookDetails} onClose={handleCloseModal}/>}
        </div>
    )
};


const BookDetailsModal = ({bookDetails, onClose}) => {
    console.log("bookDetails on modal", bookDetails.docs[0].author_name[0])
    return (
        <div className='modal'>
            <div className='modal-content'>
            <span className="close" onClick={onClose}>
          &times;
        </span>
            <h2>{bookDetails.title}</h2>
        <p>
          <strong>Authors:</strong> {bookDetails.docs[0].author_name[0]}
        </p>
        {/* <p>
          <strong>First Publish Year:</strong> {bookDetails.first_publish_year}
        </p>
        <p>
          <strong>Number of Pages:</strong> {bookDetails.number_of_pages_median || 'N/A'}
        </p>
        <p>
          <strong>Description:</strong> {bookDetails.description || 'No description available'}
        </p> */}
        {bookDetails.docs[0].cover_i && (
          <img
            src={`https://covers.openlibrary.org/b/id/${bookDetails.docs[0].cover_i}-L.jpg`}
            alt={bookDetails.title}
            className="modal-cover-image"
          />
        )}
            </div>
        </div>
    )
}



export default BookLibrary;
