import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { setFavourites, setBasket } from "../../slice/booksSlice";
import axios from 'axios';
import Title from "../../components/components-shared/Title";
import { SvgSelector } from "../../components/components-shared/icons/SvgSelectors";
import Rating from "../../components/components-shared/Rating";



function AloneBook () {

    const [ aloneBook, setAloneBook ] = useState({});
    const [ like, setLike ] = useState("HeartDislike");

    let { oneBook } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const stateFavourites = useSelector((state) => state.books.favourites);
    const stateBasket = useSelector((state) => state.books.basket);

    useEffect(() => {
        const apiUrl = `https://api.itbook.store/1.0/books/${oneBook}`;
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setAloneBook(allPersons);
        });
    }, [ stateFavourites ]);

    const hendalClickAddLikes = (e) => {
        e.target && stateFavourites.find((book) => book.isbn13 === aloneBook.isbn13) ?
        alert('Такая книга уже существует в Favourites!')
        :
        dispatch(setFavourites(aloneBook));
        setLike("HeartLike");
    };

    const hendalClickAddBasket = (e) => {
        e.target && stateBasket.find((book) => book.isbn13 === aloneBook.isbn13) ?
        alert('Такая книга уже существует в Basket!')
        :
        dispatch(setBasket(aloneBook))
    };
    

    return (
        <div className="alone-card">
            <div className="alone-card__title">
                <button onClick={(e) => e.target ? navigate('/search') : "error"}><SvgSelector id="ArrowLeft"/></button>
                <Title title={aloneBook.title}/>
            </div>
            <div className="alone-card__show-info">
                <div className="img__wrap">
                    <img src={aloneBook.image} alt="#"></img>
                    <button 
                        onClick={hendalClickAddLikes} className="heart-dislike">
                        <SvgSelector id={like}/>
                    </button>
                </div>
                <ul>
                    <li><span className="one-price">{aloneBook.price}</span><Rating rating={aloneBook.rating}/></li>
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
                    <li><button onClick={hendalClickAddBasket}>add to cart</button></li>
                    <li><span className="prewiew">Preview book</span></li>
                </ul>
            </div>
            <ul className="alone-books_popaps">
                <li>Description</li>
                <li>Authors</li>
                <li>Reviews</li>
            </ul>
            <p>{aloneBook.desc}</p>
            <div className="alone-card__links">
                <li><a href="https://www.facebook.com/?locale=ru_RU"><SvgSelector id="Facebook"/></a></li>
                <li><a href="https://twitter.com/?lang=ru"><SvgSelector id="Twitter"/></a></li>
                <li><a href="http://localhost:3000/books"><SvgSelector id="Dots"/></a></li>
            </div>
        </div>
    )
}

export default AloneBook