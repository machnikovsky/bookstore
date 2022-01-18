import {useEffect, useState} from "react";
import GetAndSetUtil from "../api/GetAndSetUtil";

const Cart = () => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        GetAndSetUtil.getAndSetCart(setCartItems);
    }, [])

    return (
        <div className="cart">
            { cartItems.length > 0 && cartItems.map((item, index) => (
                <div className="cart-item center" key={ index }>[{ item.book_type }] { item.title } : { item.count }</div>
                ))
            }
        </div>
    );
}

export default Cart;