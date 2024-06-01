import { useContext } from "react"
import { CartContext } from "../../context/CartContext/CartContext"
import CartDetail from "../CartDetail/CartDetail"

function Cart() {

  const {cart, clearCart, cartTotal} = useContext(CartContext)


  return (
    <div className="modal-header">
      <h2 className="modal-header-title">Resumen de su compra</h2>
      <div className="modal-content">
        {Cart.length === 0 ? (
          <h1>No hay productos en el carrito</h1>
        ) : (cart.map((item)=>{
          return <CartDetail key = {item.id} item={item} />
        }))}
      </div>
        <h3>Total: ${cartTotal}</h3>
        <button onClick={clearCart}>Limpiar Carrito</button>
    </div>
  )
}

export default Cart