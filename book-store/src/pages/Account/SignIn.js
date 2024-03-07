function SignIn () {
    return (
        <div className="signin">
            <div className="signin__wrapper">
                <div>
                    <span>sign in</span>
                    <span>sign up</span>
                </div>
                <label for="email">
                    Email
                    <input type="email" name="email" id="email"/>
                </label>
                <label for="password">
                    Password
                    <input type="password" name="password" id="password"/>
                </label>
                <span>Forgot password?</span>
                <button>sign in</button>
            </div>
        </div>
    )
}

export default SignIn