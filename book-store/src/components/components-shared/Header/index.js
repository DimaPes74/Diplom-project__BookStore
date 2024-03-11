import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue } from "../../../slice/booksSlice";
import { SvgSelector } from "../icons/SvgSelectors"
import axios from "axios";



function Header () {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    let { oneBook } = useParams();

    let [ value, setValue ] = useState('');
    const [ valueBurger, setValueBurger ] = useState('');
    const [ popap, setPopap] = useState('');
    const [ isOpen, setOpen ] = useState();

    const handleClickSearch = (e) => {
        if (e.target) {
            navigate("/search")
            dispatch(setInputValue(value))
            setValue('')
        }
    }
    const handleClickSearchBrgr = (e) => {
        if (e.target) {
            navigate("/search")
            dispatch(setInputValue(valueBurger))
            setValueBurger('')
            setOpen("")
        }
    }

    useEffect(() => {
        const apiUrl = `https://api.itbook.store/1.0/search/${value}`;
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setPopap(allPersons.books);
        });  
    }, [ value ]);

    const stateBasket = useSelector((state) => state.books.basket);
    const stateFavourites = useSelector((state) => state.books.favourites);

    return (
        <>
            <div className="header">
                <div className="header__left">
                    <Link to="/books">bookstore</Link>
                </div>
                <div className="header__center">
                    <input
                        placeholder="Search"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button onClick={handleClickSearch}><SvgSelector id="Search"/></button>
                </div>
                <ul className="header__right">
                    <li><button onClick={(e) => e.target ? navigate('/favorits') : ''} >{stateFavourites?.length ? <SvgSelector id="Vector-activ"/> : <SvgSelector id="Vector"/>}</button></li>
                    <li><button onClick={(e) => e.target ? navigate('/basket') : ''} >{stateBasket?.length ? <SvgSelector id="Shop-group"/> : <SvgSelector id="Group"/>}</button></li>
                    <li><button onClick={(e) => e.target ? navigate('/autorization') : ''}><SvgSelector id="User"/></button></li>
                    <li><button onClick={() => setOpen(!isOpen)}><SvgSelector id="Burger"/></button></li>
                </ul>
            </div>
            {
                popap?.length >= 1 && 
                <ul className='popap'>
                {
                    popap?.length ?
                    popap.map((book, index) => {
                        if (index <= 3) {
                            return (
                                <li onClick={(e) => e.target ? oneBook = book.isbn13 && navigate(`/search/${book.isbn13}`) | setValue('') : "no"}>
                                    <div><img src={book.image} alt="#"></img></div>
                                    <span>{book.title}</span>
                                </li>
                            )
                        }
                    }) 
                    : 
                    ''
                }
                <button onClick={handleClickSearch}>all results</button>
            </ul>
            }
            <nav className={`header__nav ${isOpen ? "activ" : ""}`}>
                <ul className="header__nav-list">
                    <li className="header__nav-items">
                        <div className="header__nav-items__link">
                            <Link onClick={() => setOpen("")} to="/books">bookstore</Link>
                        </div>
                        <button 
                            onClick={(e) => e.target ? navigate('/basket') | setOpen("") : ''} className="header__nav-items__btn">
                            {stateBasket?.length ? <SvgSelector id="Shop-group"/> : <SvgSelector id="Group"/>}
                        </button>
                        <button onClick={() => setOpen("")}><SvgSelector id="Cancel"/></button>
                    </li>
                    <li className="header__nav-items">
                        <input
                            placeholder="Search"
                            value={valueBurger}
                            onChange={e => setValueBurger(e.target.value)}
                        />
                        <button onClick={handleClickSearchBrgr}><SvgSelector id="Search"/></button>
                    </li>
                    <li className="header__nav-items">
                        <Link onClick={() => setOpen("")} to="favorits">favourites</Link>
                    </li>
                    <li className="header__nav-items">
                        <Link onClick={() => setOpen("")} to="basket">cart</Link>
                    </li>
                    <li className="header__nav-items">
                        <button>log out</button>
                    </li>
                </ul>
            </nav>
        </>
        
    )
}



export default Header