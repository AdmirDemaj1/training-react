import React, { useEffect } from 'react';
import './Footer.css';
import {useParams} from 'react-router-dom';

const BookDetails = () => {
    const params = useParams();
    //Homework Fetch data based on the id of the book that user selected
    // useEffect(()=> {},[params.bookId])
    const id = params.bookId;
  return (
   <>You selected book with id {id}</>
  );
};

export default BookDetails;