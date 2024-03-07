import { useSelector, useDispatch } from "react-redux";
import { delFavorits } from "../../slice/booksSlice";
import { useNavigate } from "react-router-dom";
import { SvgSelector } from "../../components/components-shared/icons/SvgSelectors";
import Title from "../../components/components-shared/Title";


function Favorits () {

    const favoritsState = useSelector((state) => state.books.favorits);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="favorits">
            <button onClick={(e) => e.target ? navigate('/search') : "error"}><SvgSelector id="ArrowLeft"/></button>
            <Title title="favorits"/>
            {
                favoritsState?.length ?
                favoritsState.map((book, index) => {
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
                                <button onClick={(e) => e.target ? dispatch(delFavorits(book.isbn13)) : 'error'}><SvgSelector id="HeartLike"></SvgSelector></button>
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