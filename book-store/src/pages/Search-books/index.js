import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { selectAllBooks, setSearchBook } from "../../slice/booksSlice";
import axios from "axios";
import Title from "../../components/components-shared/Title";


function SearchBooks () {

    // const dispatch = useDispatch();

    // const books = useSelector(selectAllBooks);

    // const bookStatus = useSelector ( (state) => state.books.status );

    const navigate = useNavigate();

    const [ searching, setSearching ] = useState([]);

    let { search } = useParams();

    useEffect(() => {
        const apiUrl = `https://api.itbook.store/1.0/search/${search}`;
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setSearching(allPersons.books);
            // dispatch(setSearchBook(searching))
        });
    }, [search]);


    return (
        <div className="search-books">
            <Title title={` " ${search} " ` + "search results"}/>
            <div className="search-books__wrapper">
                {
                    searching.length ?
                    searching.map((book) => {
                        return (
                            <div className="book-wrap">
                                <div><img onClick={(e) => e.target ? search = book.isbn13 && navigate(`/aloneBook/${book.isbn13}`): "no"} src={book.image} alt="#"></img></div>
                                <h3>{book.title}</h3>
                                <p>{book.subtitle}</p>
                                <span>{book.price}</span>
                            </div>
                        )
                    })
                    :
                    ''
                }
            </div>
        </div>
    )
}

export default SearchBooks