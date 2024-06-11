import React from 'react';
import './Footer.css';
import { redirect, useLoaderData, useParams } from 'react-router-dom';
import BookItem from './BookItem';

const BookDetails = () => {
  const data = useLoaderData();
  console.log("data of single book", data);
  return (
    <div>
      <BookItem book={data.book} />
    </div>
  );
};

export default BookDetails;

export async function loader({request, params}) {
    const id = params.bookId;
    const response = await fetch('http://localhost:8080/books/' + id);
  
    if(!response.ok){
        //....
    } else{
        return response;
    }
}

export async function action({request, params}) {

  console.log(request.method, params.bookId)
  const bookId = params.bookId;
  const response = await fetch('http://localhost:8080/books/' + bookId, {
    method: request.method
  });

  if(!response.ok){
      //....
  }
  return redirect("/books")
}