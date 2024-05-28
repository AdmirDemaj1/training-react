import React, { useState, useRef } from "react";
import { useFetch, useFetchDetails, useFilterBook } from "./customHooks/fetchHook";
import "./BookLibrary.css";

const BOOKS_URL =
  "https://openlibrary.org/people/mekBot/books/want-to-read.json";

const BookLibrary = () => {
    // useFetch: to handle api calls and managing erros and loading states
    // uBookDetails: To fetch book details when a book is selected.
    // useFilter: To handle filtering of reading logs based on user input

  const [selectedBook, setSelectedBook] = useState(null);
  const [filterValue, setFilterValue] = useState("");
  const valueOfFilter = useRef(null);

  const { data, loading, error } = useFetch(BOOKS_URL);
  const title = selectedBook && selectedBook !== null ? selectedBook.title.replace(" ", "+"): "";
  const { details, setDetails } = useFetchDetails(`https://openlibrary.org/search.json?q=${title}`);
  const { filteredItems } = useFilterBook(data ? data.reading_log_entries : [], filterValue);



  const handleSelectBook = (title) => {
    setSelectedBook(title);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
    setDetails(null);
  };

  const handleSearchClick = () => {
    setFilterValue(valueOfFilter.current);
  };

 
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
    <div className="container">
      <h1 className="heading">Book Shop Reading Logs</h1>
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
        </thead>
        <tbody>
          {filteredItems.map((book) => (
            <tr key={book.work.key}>
              <button onClick={() => handleSelectBook(book.work)}>
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

export default BookLibrary;
