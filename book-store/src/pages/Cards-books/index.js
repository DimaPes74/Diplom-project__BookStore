import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import Title from '../../components/components-shared/Title/index';
import Subscribe from "../../components/components-shared/Subscribe";
import Pagination from "../../components/components-shared/Pagination";


function CardsBooks () {

    const [ books, setBooks ] = useState([]);

    const navigate = useNavigate();

    let { oneBook } = useParams();

    useEffect(() => {
        const apiUrl = 'https://api.itbook.store/1.0/new';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setBooks(allPersons.books)
        });
    }, []);

    return (
        <div className="cards">
            <Title title="New Releases Books"/>
            <div className="cards__books-wraper">
                {
                    books.length ?
                    books.map(( book ) => {
                        return (
                            <div className="cards__book-wrap">
                                <div className="cards__book-img"><img onClick={(e) => e.target ? oneBook = book.isbn13 && navigate(`/search/${book.isbn13}`): "no"} src={book.image} alt="#"></img></div>
                                <div className="cards__book-desc">
                                    <h3>{book.title}</h3>
                                    <p>{book.subtitle || 'Subtitle'}</p>
                                    <span>{book.price}</span>
                                </div>
                            </div>
                        )
                    })
                    :
                    ''
                }
            </div>
            <Pagination></Pagination>
            <Subscribe />
        </div>
    )
}

export default CardsBooks