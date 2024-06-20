import React from 'react';
import './Header.css';
import { Form, Link, NavLink, Outlet, useRouteLoaderData } from 'react-router-dom';

const Header = () => {
  const token =  useRouteLoaderData("mainRoot");

  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="logo">Book Haven</h1>
          <nav>
            <ul className="nav-links">
         {/* <a href="/">Home</a> */}
            {/* <a href="/books">Another Page</a>  */}
             {/* <Link to="/">Home</Link>
              <Link to="/books">Books</Link> */}
              <NavLink
                to="/"
                //  style={({isActive})}
               className={({isActive}) => (isActive ? "active" : "") }
              >
                Home
              </NavLink> 
              <NavLink to="/books" >
                Books
              </NavLink>
              {!token ? ( <NavLink to="/auth?mode=login" className={({isActive}) => (isActive ? "active" : "") } >
                Authenticate
              </NavLink>) : <Form action='/logout' method='post'><button style={{
                backgroundColor: "transparent",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontSize: "13px"
              }}>Logout</button></Form>}
             
              
              
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;