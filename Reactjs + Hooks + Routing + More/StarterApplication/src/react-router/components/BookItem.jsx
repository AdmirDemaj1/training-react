import React, { useEffect } from 'react';
import classes from './BookItem.module.css';
import {Link, NavLink, useParams, useRouteLoaderData, useSubmit} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cardActions } from '../store/cardReducer';
const BookItem = ({book}) => {
 const dispatch = useDispatch();
  const token =  useRouteLoaderData("mainRoot");
  const booksInCart = useSelector((state) => state.items)
  console.log("booksInCart",booksInCart);

  const submit = useSubmit();

  function handleDeleteFunction() {
   
    const process = window.confirm(`Are you sure you want to delete ${book.title}`)
    if(process){
      submit(null, {method: 'delete'})
    }
  }

  console.log("book",book)

  const addItemInCart = () => {
    console.log("heyyy")
    dispatch(cardActions.addItemToCart({bookId: book.id , bookPrice: book.price}));
  }
  // dispatch(itemsInCart.addItem({bookData}))
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
          {token && <a href="edit">Edit</a>}
          <Link to="..">Go to List</Link>
          {token &&  <button onClick={handleDeleteFunction}>Delete</button>}
          <button onClick={addItemInCart}>Add To Card</button>
        </menu>
      </article>
    );
};

export default BookItem;