import { useState, useEffect } from "react";
import axios from 'axios';
import Title from '../../components/components-shared/Title/index';


function CardsBooks () {

    const [ books, setBooks ] = useState([]);

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
                    books.map((book) => {
                        return (
                            <div className="cards__book-wrap">
                                <div><img src={book.image} alt="#"></img></div>
                                <h3>{book.title}</h3>
                                <span>{book.subtitle}</span>
                                <span>{book.price}</span>
                                <button onClick={''}>+</button>
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

export default CardsBooks