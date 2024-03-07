import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFavorits, setBasket } from "../../slice/booksSlice";
import axios from 'axios';
import Title from "../../components/components-shared/Title";
import { SvgSelector } from "../../components/components-shared/icons/SvgSelectors";



function AloneBook () {

    const [ aloneBook, setAloneBook ] = useState({});

    let { oneBook } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const apiUrl = `https://api.itbook.store/1.0/books/${oneBook}`;
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setAloneBook(allPersons);
        });
    }, []);
    

    return (
        <div className="alone-card">
            <div className="alone-card__title">
                <button onClick={(e) => e.target ? navigate('/search') : "error"}><SvgSelector id="ArrowLeft"/></button>
                <Title title={aloneBook.title}/>
            </div>
            <div className="alone-card__show-info">
                <div>
                    <img src={aloneBook.image} alt="#"></img>
                    <button onClick={(e) => e.target ? dispatch(setFavorits(aloneBook)) : ''} className="heart-dislike"></button>
                </div>
                <ul>
                    <li><span className="one-price">{aloneBook.price}</span><span>{aloneBook.rating}</span></li>
                    <li><span className="this-book_info">Authors</span><span className="this-book_value">{aloneBook.authors}</span></li>
                    <li><span className="this-book_info">Publisher</span><span className="this-book_value">{aloneBook.publisher}</span></li>
                    <li><span className="this-book_info">Language</span><span className="this-book_value">{aloneBook.language}</span></li>
                    <li><span className="this-book_info">Format</span><span className="this-book_value">pdf/eBook</span></li>
                    <li>
                        <select className="select" name="select">
                            <option value="value2">More ditails</option>
                            <option value="value2">Subtitle: {aloneBook.subtitle}</option>
                            <option value="value3" >Year: {aloneBook.year}</option>
                            <option value="value4">Pages: {aloneBook.pages}</option>
                        </select>
                    </li>
                    <li><button onClick={(e) => e.target ? dispatch(setBasket(aloneBook)) : ''}>add to cart</button></li>
                    <li><span className="prewiew">Preview book</span></li>
                </ul>
            </div>
            <ul className="alone-books_popaps">
                <li>Description</li>
                <li>Authors</li>
                <li>Reviews</li>
            </ul>
            <div className="alone-card__description">
                <p id="desc">{aloneBook.desc}</p>
                <p>{aloneBook.authors}</p>
                <p>Reviews</p>
            </div>
            <div className="alone-card__links">
                links
            </div>
        </div>
    )
}

export default AloneBook