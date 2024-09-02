import { useState } from "react"

const [ name, setName ] = useState('');
const [ mail, setNMail ] = useState('');
const [ pass, setPass ] = useState('');

const handleClickAuth = (e) => {
    if (e.target) {

    }
}

function SignUp () {


    return (
        <div className="signin__bottom">
            <label for="text">
                Name
                <input
                    placeholder="Your pname" value={value} onChange={e => setValue(e.target.value)} 
                    type="text" name="password" id="password"
                />
            </label>
            <label for="email">
                Email
                <input 
                    placeholder="Your email" value={value} onChange={e => setValue(e.target.value)} 
                    type="email" name="email" id="email"
                />
            </label>
            <label for="password">
                Password
                <input 
                    placeholder="Your password" value={value} onChange={e => setValue(e.target.value)}
                    type="password" name="password" id="password"
                />
            </label>
            <label for="password">
                Confirm password
                <input 
                    placeholder="Confirm your password" value={value} onChange={e => setValue(e.target.value)} 
                    type="password" name="password" id="password"
                />
            </label>
            <button onClick={handleClickAuth}>sign up</button>
        </div>
    )
}

export default SignUp