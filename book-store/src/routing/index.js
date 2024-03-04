import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import CardsBooks from '../pages/Cards-books/index';
import SearchBooks from '../pages/Search-books';
import AloneBook from '../pages/Alone-book';

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
                path: "books/:search",
                element: <SearchBooks />,
            },
            {
                path: "aloneBook",
                element: <AloneBook />
            },
            {
                path: "aloneBook/:oneBook",
                element: <AloneBook />,
            }
        ]
    },
])

export default Router