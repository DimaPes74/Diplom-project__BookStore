import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setInputValue } from "../../../slice/booksSlice";
import { SvgSelector } from "../icons/SvgSelectors"



function Header () {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    let [ value, setValue ] = useState('');

    const handleClickSearch = (e) => {
        if (e.target) {
            navigate("/search")
            dispatch(setInputValue(value))
        }
        
    }

    return (
        <div className="header">
            <div className="header__left">
                <span>bookstore</span>
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
                <li><button onClick={(e) => e.target ? navigate('/favorits') : ''} ><SvgSelector id="Vector"/></button></li>
                <li><button onClick={(e) => e.target ? navigate('/basket') : ''} ><SvgSelector id="Group"/></button></li>
                <li><button onClick={(e) => e.target ? navigate('/signin') : ''}><SvgSelector id="User"/></button></li>
            </ul>
        </div>
    )
}



export default Header