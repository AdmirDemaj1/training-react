import ReactDOM from "react-dom/client";

// import "./index.css";
// import MainPage from "./mainPage/MainPage.jsx";
import TicTacToe from "./tic-tac-toe/TicTacToe.jsx";
import MyComponent from "./useRef/MyComponent.jsx";
import ProductTableWithAutocomplete from "./useRef/ProductList.jsx";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<ProductTableWithAutocomplete />);