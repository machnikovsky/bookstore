import logo from '../assets/other/bookstore-logo.png'
import cart from '../assets/icons/shopping-cart.png'

const Navbar = () => {
    return (
            <nav>
                <div id="logo-container">
                    <img src={logo} alt="logo" />
                </div>
                <ul>
                    <li className="white">Książki</li>
                    <li className="white">O nas</li>
                    <li className="black">Zaloguj</li>
                    <li className="icon"><img src={cart} alt="cart" /></li>
                </ul>
            </nav>
    );
}

export default Navbar;