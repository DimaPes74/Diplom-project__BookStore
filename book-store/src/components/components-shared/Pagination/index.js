import { useDispatch } from "react-redux"
import { nextPage, prewPage, thisPage } from "../../../slice/booksSlice";
import { SvgSelector } from "../icons/SvgSelectors"




function Pagination () {

    const dispatch = useDispatch();

    return (
        <div className="pagination">
            <ul className="pagination__wrapper">
                <li><button className="btn1" onClick={(e) => e.target ? dispatch(prewPage(1)) : ''}><SvgSelector id="ArrowUpLeft"/>Prev</button ></li>
                <li><button className="btn2" onClick={(e) => e.target ? dispatch(thisPage(1)) : ''}>1</button ></li>
                <li><button className="btn3" onClick={(e) => e.target ? dispatch(thisPage(2)) : ''}>2</button ></li>
                <li><button className="btn4" onClick={(e) => e.target ? dispatch(thisPage(3)) : ''}>3</button ></li>
                <li><button className="btn5" onClick={(e) => e.target ? dispatch(nextPage(1)) : ''}>Next<SvgSelector id="ArrowUpRight"/></button></li>
            </ul>
        </div>
    )
}

export default Pagination