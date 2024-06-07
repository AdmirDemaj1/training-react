import React, { useState, useRef, useEffect } from "react";
import { useFetch, useFetchDetails, useFilterBook } from "../hooks/customHooks/fetchHook";
import "./BookLibrary.css";
import { RatingProvider, useRating } from "./useContextRating";
import {  useTheme } from "./useContextTheme";
import { useNavigate } from 'react-router-dom';
import Header from "../react-router/components/Header";

const BOOKS_URL =
  "https://openlibrary.org/people/mekBot/books/want-to-read.json";

const BookLibrary = () => {
  const navigate = useNavigate();
    // useFetch: to handle api calls and managing erros and loading states
    // uBookDetails: To fetch book details when a book is selected.
    // useFilter: To handle filtering of reading logs based on user input

  const [selectedBook, setSelectedBook] = useState(null);
  const [filterValue, setFilterValue] = useState("");
  // const [theme, setTheme] = useState('light');
  const {theme,toggleTheme} = useTheme();

  // const [ratings, setRatings] = useState({});
  const valueOfFilter = useRef(null);

  const { data, loading, error } = useFetch(BOOKS_URL);
  const title = selectedBook && selectedBook !== null ? selectedBook.title.replace(" ", "+"): "";
  const { details, setDetails } = useFetchDetails(`https://openlibrary.org/search.json?q=${title}`);
  const { filteredItems } = useFilterBook(data ? data.reading_log_entries : [], filterValue);



  const handleSelectBook = (bookId) => {
    console.log("bookId",bookId)
    // setSelectedBook(title);
    navigate(`/books/${bookId}`);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
    setDetails(null);
  };

  const handleSearchClick = () => {
    setFilterValue(valueOfFilter.current);
  };

//  const handleRatingChange = (bookId, rating) => {
//   setRatings((prevRating ) => ({
//     ...prevRating,
//     [bookId]: rating
//   }))
//  }
// const toggleTheme = () => {
//   setTheme(theme === 'light' ? 'dark' : 'light');
// };



 
    if(loading && !data) {
        return <div className='loading'>Loadingg.....</div>
    }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  // We were missing: data.reading_log_entries and we had only data. That triggered an error.
  // const filteredBooks = data.reading_log_entries
  //   ? data.reading_log_entries.filter((book) =>
  //       book.work.title.toLowerCase().includes(filterValue.toLowerCase())
  //     )
  //   : [];

  return (

    <RatingProvider>
    <div className={`container ${theme === "dark" ? 'dark': ''}`}>
      {/* <Header/> */}
      
    <button onClick={toggleTheme}>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</button>{' '}
      <h1 className={`heading ${theme === "dark" ? 'dark': ''}`}>Book Shop Reading Logs</h1>
      <div className="autocomplete">
        <input
          type="text"
          ref={valueOfFilter}
          //   value={filterValue}
          placeholder="Search products..."
          onChange={(e) => (valueOfFilter.current = e.target.value)}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      <table className="table">
        <thead>
          <th>Select</th>
          <th>Title</th>
          <th>Authors</th>
          <th>First Publish Year</th>
          <th>Logged Date</th>
          <th>Cover Image</th>
          <th>Review</th>
        </thead>
        <tbody>
          {filteredItems.map((book) => (
            <tr key={book.work.key}>
              <button onClick={() => handleSelectBook(book.work.cover_id )}>
                Select
              </button>
              <td>{book.work.title}</td>
              <td>{book.work.author_names.join(", ")}</td>
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
                  "No Cover"
                )}
              </td>
              <td>
                <ShowRatingWrapper bookId={book.work.key}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedBook && details.docs[0] && (
        <BookDetailsModal
          bookDetails={details}
          onClose={handleCloseModal}
        />
      )}
    </div>
    </RatingProvider>
    
  );
};

const BookDetailsModal = ({ bookDetails, onClose }) => {
  console.log("bookDetails on modal", bookDetails.docs[0].author_name[0]);
  return (
    <div className="modal">
      <div className="modal-content">
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
  );
};

const ShowRatingWrapper = ({bookId }) => {
  useEffect(() => {
    setTimeout(() => {
      console.log("Hello, World!");
    }, 3000);
  })


 
  return (
    <>
    <Rating bookId={bookId} />
    </>
  )
}

const Rating = ({bookId}) => {
 const {ratings ,handleRatingChange } = useRating();
 const {theme } = useTheme();
 const rating = ratings[bookId] || 0;


 console.log("current theme",theme);

return (
  <div className="rating">
    {[1,2,3,4,5].map((star) => (
      <span className={star <= rating ? "star filled" : "star"} key={star} onClick={() => handleRatingChange(bookId, star)}>
      &#9733;
      </span>
    ))}

  </div>
)
}







export default BookLibrary;
