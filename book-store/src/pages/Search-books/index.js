import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Title from "../../components/components-shared/Title";
import Pagination from "../../components/components-shared/Pagination";


function SearchBooks () {

    const valueInput = useSelector((state) => state.books.inputValue);
    const valuePage = useSelector((state) => state.books.pageValue);

    const navigate = useNavigate();

    const [ searching, setSearching ] = useState([]);

    let { oneBook } = useParams();

    useEffect(() => {
        const apiUrl = `https://api.itbook.store/1.0/search/${valueInput}/${valuePage}`;
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setSearching(allPersons.books);
        });
    }, [valueInput, valuePage]);


    return (
        <div className="search-books">
            <Title title={` " ${valueInput} " ` + "search results"}/>
            <div className="search-books__wrapper">
                {
                    searching?.length ?
                    searching.map((book) => {
                        return (
                            <div className="book-wrap">
                                <div><img onClick={(e) => e.target ? oneBook = book.isbn13 && navigate(`/search/${book.isbn13}`): "no"} src={book.image} alt="#"></img></div>
                                <h3>{book.title}</h3>
                                <p>{book.subtitle}</p>
                                <span>{book.price}</span>
                            </div>
                        )
                    })
                    :
                    navigate('/books')
                }
            </div>
            <Pagination />
        </div>
    )
}

export default SearchBooks