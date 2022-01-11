import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../../auth/Auth";
import UserContext from "../../auth/UserContext";

const Login = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        Auth.login(login, password)
        setUser(login);
        navigate('/');
    }

    return (
        <div className="login">
            <h1>Zaloguj</h1>
            <form>
                <input
                    type="text"
                    placeholder="Email"
                    required
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Haslo"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}

export default Login;