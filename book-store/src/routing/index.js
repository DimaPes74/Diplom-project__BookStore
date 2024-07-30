import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import CardsBooks from '../pages/Cards-books/index';
import SearchBooks from '../pages/Search-books';
import AloneBook from '../pages/Alone-book';
import Favorits from '../pages/Favorits';
import Basket from '../pages/Basket';
import Autorization from '../pages/Account/Autorization';
import Signin from '../pages/Account/Signin';
import SignUp from '../pages/Account/SignUp';


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
                path: "autorization",
                element: <Autorization />,
                children: [
                    {
                        index: 1,
                        element: <Signin /> 
                    },
                    {
                        path: 'signIn',
                        element: <Signin />,
                    },
                    {
                        path: "signUp",
                        element: <SignUp />
                        
                    }
                ]
            }
        ]
    },
])

export default Router