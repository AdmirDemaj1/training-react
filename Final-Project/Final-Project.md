![Book Shop App Demo](https://github.com/your-username/book-shop-app/blob/main/assets/demo.gif)

# Book Shop App

A modern book shop application built using ReactJS. This application allows users to browse, search, and purchase books. It includes features such as book listings, book details, a shopping cart,user authentication and more.


## Installation

### Creating a React App with TypeScript

1. **Install Create React App**:

    ```bash
    npx create-react-app book-shop-app --template typescript
    cd book-shop-app
    ```

    🍉 You can also use vite as build tool. Feel free to choose but I would recomend to use vite.js

2. **Install additional dependencies** (optional, depending on your requirements):

    Example:

    ```bash
    npm install redux react-redux @reduxjs/toolkit react-router-dom  @material-ui/core 
    ```

3. **Run the app**:

    ```bash
    npm start
    ```

    The app should now be running on `http://localhost:3000`.

### Connecting to a GitHub Repository

1. **Initialize a Git repository**:
     Open the terminal of the created project and run:

    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2. **Create a new repository on GitHub**:

    - Go to [GitHub](https://github.com) and log in.
    - Click on the `+` icon in the top right corner and select `New repository`.
    - Enter a name for your repository (e.g., `book-shop-app`), and click `Create repository`.

3. **Add the remote repository and push your code**:

    ```bash
    git remote add origin https://github.com/your-username/book-shop-app.git
    git branch -M main
    git push -u origin main
    ```

    Replace `your-username` with your GitHub username.

## Features

- **Book Listings**: Browse through a collection of books .
- **Books Actions**: Allow the user to create, update or delete a book only if the user role is admin.
- **Book Details**: View detailed information about a book including description, author, price, reviews and more.
- **Search**: Search for books by title, author using performance optimisation technicues (refs, debounce, throotling).
- **Shopping Cart**: Add, remove, and update the quantity of books in the cart.
- **Checkout**: Secure checkout process with order summary and payment options.
- **User Authentication**: Register, login, and manage user profiles.
- **Responsive Design**: Fully responsive design for a great user experience on both desktop and mobile devices.
- **User Profile Page**: Users can open their profile page to update their name, to change the theme from dark/light mode.

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
- When user selects one of the books a quick view/information page is opened which displayes details about selected book.
- The user can also leave a review for the book by stars.
- There should be two forms one which allows the admin to create a book and one to edit a book.


ℹ️ Endpoints:


### User Profile

- Inside the user profile the user can change the username and change the theme of the application.
- You can handle the theme in two ways:
    1. Using material-ui have a look at this example: https://codesandbox.io/s/g3vpfz?file=/src/Demo.js
    2. Creating styling manually both for dark and light mode and by using conditional rendering you can display the current theme. (The management of theme should be handeled by using useContext API as a global state manager).
    3. Make sure to save the theme in localStorage so when the user reloads the page the theme is not reseted.

ℹ️ Endpoints:

### Shooping Cart

- The user can add products to their shooping cart only if the user role is not admin.
- For implementing this feature you have to use reduxjs/toolkit by creating the store, slice, actions and subscribing to the store to retrieve the data in different componets.
- The user can open the cart items and can remove one or all of them.
- He can also proceed to checkout where a cart is shown displaying the total amount he has to pay also a form where he can insert card information. 

ℹ️ Endpoints:


## Project Structure

```plaintext
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── BookDetails.tsx
│   │   ├── BookDetails.test.ts
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
│   ├── context
│   │   ├── useContextTheme.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
└── ...


