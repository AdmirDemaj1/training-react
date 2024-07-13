import AuthenticationForm, {action as authHandler} from "../react-hhok-form/loginForms/App";
import { checkAuthToken, getAuthToken } from "../react-hhok-form/loginForms/util/auth";
import BookLibrary, {loader as fetchBooksList} from "../useEffect/BookLibrary";
import BookDetails, {loader as fetchBookDetails, action as deleteCurrentBook} from "./components/BookDetailsPage";
import {action as logOutAction} from "./pages/Logout";
import BookForm from "./components/BookForm";
import BooksNavigation from "./components/BooksNavigation";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Landing from "./pages/Landing";
// Step 1 imort the hook for declaring the routes
import { createBrowserRouter, RouterProvider, useNavigate , redirect } from "react-router-dom";


// Absolute path approach
// const router =  createBrowserRouter([
//     {path:'/parent', element:<Header/>, children: [
//     {path:'/parent', element:<Landing />},
//     {path:"/parent/books", element:<BookLibrary/> },
//     {path:"/parent/books/:bookId", element:<BookDetails/> }
//     ],
//     errorElement: <NotFound/> },
// ])


//Relative paths
const router =  createBrowserRouter([
    {path:'/', element:<Header/>, id: "mainRoot" , loader: getAuthToken, children: [
    {index: true, element:<Landing />},
    {path:"books", element:<BooksNavigation/> , children: [
        {index: true, element: <BookLibrary/>, loader: fetchBooksList },
        {path:"createNew", element:<BookForm/> , loader: checkAuthToken, action: async ({request, params}) => {
            const token  = getAuthToken();
            const formDataToSubmit = await request.formData();
            const bookData = {
                title: formDataToSubmit.get('title'),
                description: formDataToSubmit.get('description'),
                price: formDataToSubmit.get('price'),
                coverImage: formDataToSubmit.get('image'),
                publishYear: formDataToSubmit.get('date'),
                loggedDate:  formDataToSubmit.get('loggedDate'),
                author: formDataToSubmit.get('author')
            }
            await fetch('http://localhost:8080/books',
                 {method: 'POST', body: JSON.stringify(bookData),
                headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token}})

                return redirect('/books');
        }},
        {path:":bookId", element:<BookDetails/>, loader: fetchBookDetails , action: deleteCurrentBook  },
    ]},
    {path:"auth", element:<AuthenticationForm/>, action: authHandler},
    {path:"logout", action: logOutAction}
    ],
    errorElement: <NotFound/> },
])

function App() {
    return <RouterProvider router={router}/>
}
export default App;