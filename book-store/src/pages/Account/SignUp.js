

function SignUp () {


    return (
        <div className="signin__bottom">
            <label for="text">
                Name
                <input placeholder="Your pname" type="password" name="password" id="password"/>
            </label>
            <label for="email">
                Email
                <input placeholder="Your email" type="email" name="email" id="email"/>
            </label>
            <label for="password">
                Password
                <input placeholder="Your password" type="password" name="password" id="password"/>
            </label>
            <label for="password">
                Confirm password
                <input placeholder="Confirm your password" type="password" name="password" id="password"/>
            </label>
            <button>sign up</button>
        </div>
    )
}

export default SignUp