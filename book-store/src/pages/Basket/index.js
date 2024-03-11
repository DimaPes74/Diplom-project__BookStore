import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { delBasket } from "../../slice/booksSlice";
import { SvgSelector } from "../../components/components-shared/icons/SvgSelectors";
import Title from "../../components/components-shared/Title";


function Basket () {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const basketState = useSelector((state) => state.books.basket);

    let countBook = 1;

    return (
        <div className="your-cart">
            <button className="basket-btn" onClick={(e) => e.target ? navigate('/search') : "error"}><SvgSelector id="ArrowLeft"/></button>
            <Title title="your cart"/>
            {
                basketState?.length ?
                basketState.map((book) => {
                    return(
                        <div className="your-cart__wrapper">
                            <div className="your-cart__image"><img src={book.image} alt="#"></img></div>
                            <ul className="your-cart__info">
                                <li>{book.title}</li>
                                <li>{`by ${book.authors}, ${book.year}`}</li>
                                <li><button>-</button>{countBook}<button onClick={(e) => e.target ? countBook =+ 1 : ''}>+</button></li>
                            </ul>
                            <div className="your-cart__price">
                                <div><span>{book.price}</span></div>
                                <button onClick={(e) => e.target ? dispatch(delBasket(book.isbn13)) : ''}><SvgSelector id="Cancel"/></button>
                            </div>
                        </div>
                    )
                }) 
                : 
                'пусто'
            }
            <div className="your-cart__total">
                <div><span>total:</span><span>{`$ ${basketState.reduce((a, b) => Number(a) + parseFloat(b.price.substring(1)), 0)}`}</span></div>
                <button>check out</button>
            </div>
        </div>

    )
}

export default Basket