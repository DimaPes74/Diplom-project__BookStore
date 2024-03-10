import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setInputValue } from "../../slice/booksSlice"
import axios from "axios";
import Title from "../../components/components-shared/Title";
import Pagination from "../../components/components-shared/Pagination";
import { SvgSelector } from "../../components/components-shared/icons/SvgSelectors";


function SearchBooks () {

    const valueInput = useSelector((state) => state.books.inputValue);
    const valuePage = useSelector((state) => state.books.pageValue);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ searching, setSearching ] = useState([]);
    const [ value, setValue ] = useState('');

    let { oneBook } = useParams();

    useEffect(() => {
        const apiUrl = `https://api.itbook.store/1.0/search/title=${valueInput}/${valuePage}`;
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setSearching(allPersons.books);
        });
    }, [valueInput, valuePage]);

    const handleClickSearch = (e) => {
        if (e.target) {
            navigate("/search")
            dispatch(setInputValue(value))
            setValue('')
        } 
    }


    return (
        <div className="search-books">
            <div className="search-books__input-wrap">
                <div>
                    <input
                        placeholder="Search"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button onClick={handleClickSearch}><SvgSelector id="Search"/></button>
                </div>
            </div>
            <Title title={` " ${valueInput} " ` + "search results"}/>
            <div className="search-books__wrapper">
                {
                    searching?.length ?
                    searching.map((book) => {
                        return (
                            <div className="book-wrap">
                                <div className="book-wrap__image"><img onClick={(e) => e.target ? oneBook = book.isbn13 && navigate(`/search/${book.isbn13}`): "no"} src={book.image} alt="#"></img></div>
                                <div className="book-wrap__desc"> 
                                    <h3>{book.title}</h3>
                                    <p>{book.subtitle || "Subtitle"}</p>
                                    <span>{book.price}</span>
                                </div>
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