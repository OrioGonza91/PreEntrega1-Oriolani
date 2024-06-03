import { useContext } from "react"
import { CartContext } from "../../context/CartContext/CartContext"
import CartDetail from "../CartDetail/CartDetail"

function Cart() {

  const { cart, clearCart, cartTotal } = useContext(CartContext)

  const handleCleanCart = () => {
    clearCart();
  }

  return (
    <div className="modal-container">
      <h2 className="modal-header-title">Resumen de su compra</h2>
      <div className="shop-content">
        {cart.length === 0 ? (
          <h1>No hay productos en el carrito</h1>
        ) : (cart.map((item) => {
          return <CartDetail key={item.id} item={item} />
        }))}
      </div>
      {
        cart.length > 0 &&
        <>
          <button onClick={handleCleanCart}>Vaciar Carrito</button>
          <h2>Total de la compra: ${cartTotal()}</h2>
        </>
      }


    </div>
  )
}

export default Cart