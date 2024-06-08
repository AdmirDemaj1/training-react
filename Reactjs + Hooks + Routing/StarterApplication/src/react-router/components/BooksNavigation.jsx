import './BooksNavigation.css';
import { NavLink, Outlet } from 'react-router-dom';

function BooksNavigation() {
  return (
    <>
      <header className="header">
        <nav>
          <ul className="list">
            <li>
              <NavLink to="/books" className={({ isActive }) => (isActive ? 'active' : '')}>
                All Books
              </NavLink>
            </li>
            <li>
              <NavLink to="/books/createNew" className={({ isActive }) => (isActive ? 'active' : '')}>
                New Book
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default BooksNavigation;