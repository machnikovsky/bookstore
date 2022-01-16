import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../../auth/Auth";
import UserContext from "../../auth/UserContext";

const Login = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();
        const loginResult = await Auth.login(login, password);
        if (loginResult) {
            setUser(login);
            navigate('/');
        } else {
            setShowError(true);
        }
    }

    return (
        <div className="center">
            <div className="login">
                <h1>Zaloguj</h1>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Nazwa użytkownika"
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
                    { showError && <div className="error-message">Niepoprawne dane.</div> }
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;