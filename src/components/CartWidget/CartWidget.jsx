import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext/CartContext"

function CartWidget() {

    const {cart} = useContext(CartContext)

    const cartQuantity = cart.reduce((acc, item)=> acc + item.quantity, 0)

    return (
        <div className="carrito">
            <Link to={'/cart'}>🛒</Link>
            <span className="cantidad-carrito">{cartQuantity}</span>
        </div>
    )
}

export default CartWidget