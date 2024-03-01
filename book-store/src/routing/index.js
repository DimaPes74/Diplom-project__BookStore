import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import CardsBooks from '../pages/Cards-books/index';
import SearchBooks from '../pages/Search-books';

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
                path: "search-books",
                element: <SearchBooks />,
            }
        ]
    },
])

export default Router