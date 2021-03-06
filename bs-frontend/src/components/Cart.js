import {useEffect, useState} from "react";
import GetAndSetUtil from "../api/GetAndSetUtil";
import cash from "../assets/icons/cash.png"
import stationary from "../assets/icons/stationary.png"
import {useNavigate} from "react-router-dom";
import ApiCall from "../api/ApiCall";

const Cart = () => {

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        GetAndSetUtil.getAndSetCart(setCartItems, setTotalPrice);
        console.log(cartItems)
    }, [])

    const handlePay = (e) => {
        e.preventDefault();
        ApiCall.payForItemsInCart()
            .then(() => {
                navigate('/success', { state: {method: 'online'}});
            })
            .catch(error => {
                console.log("Error paying for items in cart: ", error.response.data);
            })
    }

    const handleReserve = (e) => {
        e.preventDefault();
        ApiCall.payForItemsInCart()
            .then(() => {
                navigate('/success', { state: {method: 'stationary'}});
            })
            .catch(error => {
                console.log("Error paying for items in cart: ", error.response.data);
            })
    }

    return (
        <div className="cart-container">
            <h1 className="center">Koszyk</h1>
            {cartItems.length > 0 ?
                <div className="cart">
                    {cartItems.length > 0 && cartItems.map((item, index) => (
                        <div className="cart-item center" key={index}>
                            <div className="index element">{index + 1}</div>
                            <div className="poster-container element">
                                <div className="poster">
                                    <img
                                        src={item.image_url}
                                        className="background"
                                        alt="book"/>
                                </div>
                            </div>
                            <div className="title-author element">
                                <div className="title">{item.title}</div>
                                {item.authors.map((author, index) => (
                                    <div className="author" key={index}>{author.firstName} {author.lastName}</div>
                                ))}
                            </div>
                            <div className="count element">
                                <div className="count-header">Liczba sztuk:</div>
                                <div className="count value center">{item.count}</div>
                            </div>
                            <div className="issue-price element">
                                <div className="price-header">Cena za sztuk??:</div>
                                <div className="price value center">{item.price} z??</div>
                            </div>
                            <div className="price element">
                                <div className="price-header">Cena ca??kowita:</div>
                                <div className="price value center">{item.total_price} z??</div>
                            </div>
                        </div>
                    ))}
                    {cartItems.length > 0 ?
                        <>
                            <div className="total-price center">
                                ????cznie do zap??aty: {totalPrice}
                            </div>

                            <div className="buttons center">
                                <button onClick={handleReserve}>
                                    <div className="text">Odbierz na miejscu</div>
                                    <div className="image">
                                        <img src={stationary} alt="cash"/>
                                    </div>
                                </button>
                                <button onClick={handlePay}>
                                    <div className="text">Przejd?? do p??atno??ci</div>
                                    <div className="image">
                                        <img src={cash} alt="cash"/>
                                    </div>
                                </button>
                            </div>
                        </>
                        :
                        <div className="center empty">Tw??j koszyk jest pusty</div>
                    }

                </div>
                :
                <div className="empty center">Tw??j koszyk jest pusty</div>
            }
        </div>
    );
}

export default Cart;