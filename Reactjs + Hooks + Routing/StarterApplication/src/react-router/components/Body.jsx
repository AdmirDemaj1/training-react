import React from 'react';
import './Body.css';
import { Link, useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    //handle logic to cehck if user is authorized
    // if (true){
        navigate('/books');
    // } else {navigate('/login')}
    
  };
  return (
    <section className="banner">
      <div className="container">
        <h2 className="banner-title">Welcome to Book Haven</h2>
        <p className="banner-subtitle">Your one-stop shop for all your reading needs</p>
        {/* <a href="/books" className="shop-now">
          Shop Now
        </a> */}
         {/* <Link to="/books" className="shop-now">
          Shop Now
        </Link>  */}
        <button onClick={navigateHandler} className="shop-now">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Banner;