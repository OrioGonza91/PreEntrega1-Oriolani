import { useContext } from "react"
import { CartContext } from "../../context/CartContext/CartContext"


function CartDetail({ item }) {

    const {removeFromCart, addToCart} = useContext(CartContext)

    return (
        <div key={item}>
            <div>
                <div>
                    <img src={item.imagen} alt={item.titulo} />
                </div>
                <div>
                    <p>{item.titulo}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.precio}</p>
                </div>
            </div>
            <div>
                <button onClick={()=> removeFromCart(item.id, 1)}>
                    -
                </button>
                <button onClick={()=>addToCart(item, 1)}>
                    +
                </button>
            </div>
        </div>
    )
}

export default CartDetail