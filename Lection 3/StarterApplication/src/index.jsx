import ReactDOM from "react-dom/client";

// import "./index.css";
// import MainPage from "./mainPage/MainPage.jsx";
// import TicTacToe from "./tic-tac-toe/TicTacToe.jsx";
// import MyComponent from "./useRef/MyComponent.jsx";
// import ProductTableWithAutocomplete from "./useRef/ProductList.jsx";
// import TrackStateChangesComponent from "./useEffect/TrackStateChanges.jsx";
// import EventListenerComponent from "./useEffect/EventListenerComponent.jsx";
import BookLibrary from "./useEffect/BookLibrary.jsx";
import BookLibraryWithContext from "./advancedStateManagement/BookLibrary.jsx";
import { ThemeProvider } from "./useEffect/useContextTheme.jsx";
import Test from "./useEffect/Test.jsx";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<ThemeProvider><BookLibrary /><Test/></ThemeProvider>);
