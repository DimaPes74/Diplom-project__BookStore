import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import CardsBooks from '../pages/Cards-books/index';
import SearchBooks from '../pages/Search-books';
import AloneBook from '../pages/Alone-book';
import Favorits from '../pages/Favorits';
import Basket from '../pages/Basket';
import SignIn from '../pages/Account/SignIn';


const Router = createBrowserRouter([
    {
        path: "/",
        element: (
            <App />
        ),
        children: [
            {
                index: 1,
                element: <CardsBooks />,
            },
            {
                path: "books",
                element: <CardsBooks />,
            },
            {
                path: "search",
                element: <SearchBooks />,
            },
            {
                path: "search/:oneBook",
                element: <AloneBook />,
            },
            {
                path: "favorits",
                element: <Favorits />,
            },
            {
                path: "basket",
                element: <Basket />,
            },
            {
                path: "signin",
                element: <SignIn />,
            }
            
        ]
    },
])

export default Router