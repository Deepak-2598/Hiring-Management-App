import { useState } from "react";

const Login = () => {
    const [inputValue, setInputValue] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitBtn = (e) =>{
        e.preventDefault();
    }
    return(
        <div className="container">
            <div className="card">
                <h1>Login</h1>
                <form className="login-form" onSubmit={handleSubmitBtn}>
                    <input type="text" value={inputValue} name="username"
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Username" required 
                     />
                    <input type="password" value={password} name="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;