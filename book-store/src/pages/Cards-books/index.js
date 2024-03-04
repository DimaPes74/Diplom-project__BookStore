import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import Title from '../../components/components-shared/Title/index';
import Subscribe from "../../components/components-shared/Subscribe";

function CardsBooks () {

    const [ books, setBooks ] = useState([]);

    const navigate = useNavigate();

    let { search } = useParams();

    useEffect(() => {
        const apiUrl = 'https://api.itbook.store/1.0/new';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setBooks(allPersons.books)
        });
    }, [search]);

    return (
        <div className="cards">
            <Title title="New Releases Books"/>
            <div className="cards__books-wraper">
                {
                    books.length ?
                    books.map((book) => {
                        return (
                            <div className="cards__book-wrap">
                                <div><img onClick={(e) => e.target ? search = book.isbn13 && navigate(`/aloneBook/${book.isbn13}`): "no"} src={book.image} alt="#"></img></div>
                                <h3>{book.title}</h3>
                                <p>{book.subtitle || 'Subtitle'}</p>
                                <span>{book.price}</span>
                            </div>
                        )
                    })
                    :
                    ''
                }
            </div>
            <Subscribe />
        </div>
    )
}

export default CardsBooks