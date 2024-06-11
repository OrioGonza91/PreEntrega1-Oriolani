import { useContext } from "react"
import { CartContext } from "../../context/CartContext/CartContext"


function CartDetail({ item }) {

    const { removeFromCart, addToCart } = useContext(CartContext)

    

    return (
        <div className="modal-container" key={item}>
            <div className="modal-content">
                <img src={item.imagen} alt={item.titulo} />
            </div>
            <div>
                <p>{item.titulo}</p>
                <p>Precio unitario: ${item.precio}</p>
                <p>Subtotal: ${item.precio * item.quantity}</p>
            </div>
            <div className="modal-content--count">
                <button onClick={() => removeFromCart(item.id, 1)}>
                    -
                </button>
                <p>{item.quantity}</p>
                <button onClick={() => addToCart(item, 1)} disabled ={item.quantity === item.stock}>
                    +
                </button>
            </div>
        </div>
    )
}

export default CartDetail