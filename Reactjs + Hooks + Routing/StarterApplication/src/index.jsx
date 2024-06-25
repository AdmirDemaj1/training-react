import ReactDOM from "react-dom/client";

// import "./index.css";
// import MainPage from "./mainPage/MainPage.jsx";
// import TicTacToe from "./tic-tac-toe/TicTacToe.jsx";
// import MyComponent from "./useRef/MyComponent.jsx";
// import ProductTableWithAutocomplete from "./useRef/ProductList.jsx";
// import TrackStateChangesComponent from "./useEffect/TrackStateChanges.jsx";
// import EventListenerComponent from "./useEffect/EventListenerComponent.jsx";
// import BookLibrary from "./useEffect/BookLibrary.jsx";
// import BookLibraryWithContext from "./advancedStateManagement/BookLibrary.jsx";
import { ThemeProvider } from "./useEffect/useContextTheme.jsx";
// import Test from "./useEffect/Test.jsx";
// import App from "./react-router/App.jsx";
import MuiDashboard from "./mui/MuiDashboard.jsx";
import App from "./react-router/App.jsx";
import MainPage from "./redux/MainPage.jsx";
import {Provider} from 'react-redux';
import store from "./redux/store/counterStore.js";
// import App from "./react-hhok-form/loginForms/App.jsx";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
<Provider store={store}><MainPage/></Provider>
);

// ReactDOM.createRoot(entryPoint).render(
//      <ThemeProvider><App/></ThemeProvider> 
// );
