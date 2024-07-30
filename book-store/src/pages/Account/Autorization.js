import { Outlet, NavLink } from "react-router-dom"

function Autorization () {
    return (
        <div className="signin">
            <div className="signin__wrapper">
                <div className="signin__top">
                    <NavLink to="/autorization/signIn" className={({isActive}) => isActive ? "activ-link" : ''}>sign in</NavLink>
                    <NavLink to="/autorization/signUp" className={({isActive}) => isActive ? "activ-link" : ''}>sign up</NavLink>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Autorization