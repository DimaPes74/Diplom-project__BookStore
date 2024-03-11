import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin () {

    const [valuePass, setValuePass] = useState('');
    const [valueMail, setValueMail] = useState('');

    const navigate = useNavigate();

    const hendalClickSignIn = (e) => {
        if ( e.target | valuePass.length > 1 | valueMail.length > 1 ) {
            localStorage.setItem('password', valuePass)
            localStorage.setItem('mail', valueMail)
            navigate('/books')
        } else {
            alert('Не корректные данные!')
        }
    }

    return (
        <div className="signin__bottom">
            <label for="email">
                Email
                <input placeholder="Your email"
                    type="email" name="email" 
                    id="email"
                    value={valueMail}
                    onChange={e => setValueMail(e.target.value)}/>
            </label>
            <label for="password">
                Password
                <input placeholder="Your password" 
                    type="password" 
                    name="password" 
                    id="password"
                    value={valuePass}
                    onChange={e => setValuePass(e.target.value)}/>
            </label>
            <span>Forgot password?</span>
            <button onClick={hendalClickSignIn}>sign in</button>
        </div>
    )
}

export default Signin