import { useSelector, useDispatch } from "react-redux";
import { delFavourites } from "../../slice/booksSlice";
import { useNavigate } from "react-router-dom";
import { SvgSelector } from "../../components/components-shared/icons/SvgSelectors";
import Title from "../../components/components-shared/Title";


function Favorits () {

    const favouritesState = useSelector((state) => state.books.favourites);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="favorits">
            <button onClick={(e) => e.target ? navigate('/search') : "error"}><SvgSelector id="ArrowLeft"/></button>
            <Title title="favorits"/>
            {
                favouritesState?.length ?
                favouritesState.map((book, index) => {
                    return (
                        <div className="favorits__wrapper">
                            <div className="favorits__image">
                                <img src={book.image} alt="#"></img>
                            </div>
                            <ul className="favorits__info">
                                <li>{book.title}</li>
                                <li>{`by ${book.authors}, ${book.year}`}</li>
                                <li><span>{book.price}</span><span>{book.rating}</span></li>
                            </ul>
                            <div className="favorits__button">
                                <button onClick={(e) => e.target ? dispatch(delFavourites(book.isbn13)) : 'error'}><SvgSelector id="HeartLike"></SvgSelector></button>
                            </div>
                        </div>
                    )
                }) 
                :
                <span>Пусто</span>
            }
        </div>
    )
}

export default Favorits 