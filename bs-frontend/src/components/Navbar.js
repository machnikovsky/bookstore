import logo from '../assets/other/bookstore-logo.png'
import cart from '../assets/icons/shopping-cart.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
            <nav>
                <div id="logo-container">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                <ul>
                <Link to="/books"><li className="white">Książki</li></Link>
                <Link to="/about"><li className="white">O nas</li></Link>
                <Link to="/login"><li className="black">Zaloguj</li></Link>
                <Link to="/register"><li className="black">Zarejestruj</li></Link>
                <li className="icon"><img src={cart} alt="cart" /></li>
                </ul>
            </nav>
    );
}

export default Navbar;