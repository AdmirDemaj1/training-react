# Book Shop App

A modern book shop application built using ReactJS. This application allows users to browse, search, and purchase books. It includes features such as book listings, book details, a shopping cart,user authentication and more.

## Features

- **Book Listings**: Browse through a collection of books .
- **Books Actions**: Allow the user to create, update or delete a book only if the user role is admin.
- **Book Details**: View detailed information about a book including description, author, price, reviews and more.
- **Search**: Search for books by title, author using performance optimisation technicues (refs, debounce, throotling).
- **Shopping Cart**: Add, remove, and update the quantity of books in the cart.
- **Checkout**: Secure checkout process with order summary and payment options.
- **User Authentication**: Register, login, and manage user profiles.
- **Responsive Design**: Fully responsive design for a great user experience on both desktop and mobile devices.

## Requirements

### Frontend

- **ReactJS**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **reduxjs/toolkit**: A predictable GSM(Global State Manager).
- **React Router**: Declarative routing for React.
- **Material-UI**: A popular React UI framework for building responsive and accessible user         interfaces, if you feel comfortable using another library feel free to choose.
- **Jest**: A delightful JavaScript testing framework with a focus on simplicity.
- **React Testing Library**: A lightweight solution for testing React components.
- **React Hook Form**: A library which helps to manage complex form and validate forms.
- **React Hooks**: useEffect, useState, useRef, useContext ...


## Considerations ⛔

### Signup/SignIn/Logout



- If user is not authenticated by storing the authentication token in localStorage he cannot access pages like: cart, checkout, createBook, editBook ... The only page he can access is BooksList. You can achieve this by protecting routes using react-router loaders.
- If users role is not admin he cannot create, edit or delete any of the books. 
- Make sure to handle the validation for both forms so the user can see an error if he provided the wrong credentials during the login, if the email already exists during signup, if the passowrd or email format is not compatible with the input requirements.
- If the login is successful store the authentication token returned by the backend into the localStorage.
- If the user is authenticated show a button in your application so the user can also Logout.

ℹ️ Endpoints:


### Books List/ Books Forms

- Using react-router loaders or useEffect to handle side-effects fetch the books data from backend.
- Using MUI table display the data ( 🥇🥇🥇 Extra Pointss: If you use pagiantion for the table ).



## Project Structure

```plaintext
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── BookDetails.tsx
│   │   ├── BookList.tsx
│   │   ├── Cart.tsx
│   │   ├── Header.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   └── ...
│   ├── redux
│   │   ├── actions
│   │   │   ├── bookActions.ts
│   │   │   ├── cartActions.ts
│   │   │   ├── userActions.ts
│   │   │   └── ...
│   │   ├── reducers
│   │   │   ├── bookReducer.ts
│   │   │   ├── cartReducer.ts
│   │   │   ├── userReducer.ts
│   │   │   └── ...
│   │   ├── store.ts
│   │   └── ...
│   ├── utils
│   │   ├── api.ts
│   │   ├── constants.ts
│   │   ├── validations.ts
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
└── ...
