import logo from '../assets/other/bookstore-logo.png'
import cart from '../assets/icons/shopping-cart.png'
import {Link, useNavigate} from 'react-router-dom';
import {useContext} from "react";
import UserContext from "../auth/UserContext";
import Auth from "../auth/Auth";



const Navbar = () => {

    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        setUser(null);
        Auth.logout();
        navigate('/logout');
    }

    return (
            <nav>
                <div id="logo-container">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                <ul>
                <Link to="/books"><li className="white">Książki</li></Link>
                <Link to="/about"><li className="white">O nas</li></Link>
                {
                    user ?
                        <>
                            <Link to="/profile"><li className="yellow">{user}</li></Link>
                            <Link to="/logout" onClick={handleLogout}><li className="black">Wyloguj</li></Link>
                        </>
                        :
                        <>
                            <Link to="/login"><li className="bleige">Zaloguj</li></Link>
                            <Link to="/register"><li className="black">Zarejestruj</li></Link>
                        </>
                }
                <Link  to="/cart"><li className="icon"><img src={cart} alt="cart" /></li></Link>
                </ul>
            </nav>
    );
}

export default Navbar;