import BookLibrary from "../useEffect/BookLibrary";
import BookDetails from "./components/BookDetails";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Landing from "./pages/Landing";
// Step 1 imort the hook for declaring the routes
import { createBrowserRouter, RouterProvider  } from "react-router-dom";


const router =  createBrowserRouter([
    {path:'/', element:<Header/>, children: [
    {path:'/', element:<Landing />},
    {path:"/books", element:<BookLibrary/> },
    {path:"/books/:bookId", element:<BookDetails/> }
    ],
    errorElement: <NotFound/> },
])

function App() {
    return <RouterProvider router={router}/>
}
export default App;