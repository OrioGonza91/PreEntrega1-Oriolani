import { useContext } from "react"
import { CartContext } from "../../context/CartContext/CartContext"
import CartDetail from "../CartDetail/CartDetail"
import { addDoc, collection, getFirestore } from "firebase/firestore"

function Cart() {

  const { cart, clearCart, cartTotal } = useContext(CartContext)

  const order = {
    buyer: {
      name:'Gonzalo',
      email: 'gonza@mail.com',
      adress: 'Santa Rosa 1438 2F'
    },
    items: cart.map(product => ({id: product.id, titulo: product.titulo, precio: product.precio, quantity: product.quantity})),
    total: cartTotal()
  }


  const handleCleanCart = () => {
    clearCart();
  }

  const handleOrder = () =>{
    const db = getFirestore()
    const ordersCollection = collection(db, 'ordenes')
    addDoc(ordersCollection, order)
    .then(({id})=>console.log(id))
    //Este console log sirve para mostrar que se esta enviando la orden a Firestore
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
          <h2>Total de la compra: ${cartTotal()}</h2>
          <button onClick={handleCleanCart}>Vaciar Carrito</button>
          <button onClick={handleOrder}>Enviar orden</button>
        </>
      }


    </div>
  )
}

export default Cart