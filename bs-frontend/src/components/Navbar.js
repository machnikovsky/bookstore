import logo from '../assets/other/bookstore-logo.png'
import cart from '../assets/icons/shopping-cart.png'
import {Link, useNavigate} from 'react-router-dom';
import {useContext, useEffect, useState} from "react";
import UserContext from "../auth/UserContext";
import Auth from "../auth/Auth";
import GetAndSetUtil from "../api/GetAndSetUtil";


const Navbar = () => {

    const {user, setUser} = useContext(UserContext);
    const [roles, setRoles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        GetAndSetUtil.getAndSetUserRoles(user, setRoles);
    }, [user])

    const handleLogout = (e) => {
        e.preventDefault();
        setUser(null);
        Auth.logout();
        navigate('/logout');
    }

    return (
        <nav>
            <div className="part left">
                <Link to="/">
                    <div className="logo-container">
                        <img src={logo} alt="logo"/>
                    </div>
                </Link>
            </div>
            <div className="part middle">
                <Link to="/books" className="white">Książki</Link>
                {user && ["WORKER", "ADMIN"].some(role => roles.includes(role)) &&
                    <Link to="/add" className="white">Dodaj</Link>
                }
                <Link to="/about" className="white">O nas</Link>
                {
                    user ?
                        <Link to="/profile" className="yellow">{user}</Link>
                        :
                        <Link to="/login" className="bleige">Zaloguj</Link>
                }

            </div>
            <div className="part right">
                {
                    user ?
                        <Link to="/logout" onClick={handleLogout} className="black">Wyloguj</Link>
                        :
                        <Link to="/register" className="black">Zarejestruj</Link>
                }
                <Link to="/cart" className="icon"><img src={cart} alt="cart"/></Link>
            </div>
        </nav>
    );
}

export default Navbar;