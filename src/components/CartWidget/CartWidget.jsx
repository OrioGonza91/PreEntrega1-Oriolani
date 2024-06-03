
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext/CartContext"


function CartWidget() {

    const {cartCount} = useContext(CartContext)


    return (
        <div className="carrito">
            <Link to={'/cart'}>🛒</Link>
            <span className="cantidad-carrito">{cartCount()}</span>
        </div>
    )
}

export default CartWidget