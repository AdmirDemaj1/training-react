import React, { useEffect } from 'react';
import classes from './BookItem.module.css';
import {Link, NavLink, useParams} from 'react-router-dom';

const BookItem = ({book}) => {
  console.log("heyyyyy")
    // const params = useParams();
    //Homework Fetch data based on the id of the book that user selected
    // useEffect(()=> {},[params.bookId])
    // const id = params.bookId;
    return (
      <article className={classes.event}>
        <img src={book.coverImage} alt={book.title} />
        <h1>{book.title}</h1>
        <time>{book.publishYear}</time>
        <p>{book.description}</p>
        <p>{book.price}</p>
        <menu className={classes.actions}>
          <a href="edit">Edit</a>
          <Link to="..">Go to List</Link>
          <button >Delete</button>
        </menu>
      </article>
    );
};

export default BookItem;