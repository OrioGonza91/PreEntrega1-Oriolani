import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext/CartContext";


function ItemDetail({item}) {

    const [quantity, setQuantity] = useState(1)
    const {cart, addToCart} = useContext(CartContext)
    console.log(cart)

    const handleDecrement = ()=>{
        quantity > 1 && setQuantity(quantity - 1)
    }

    const handleIncrement = () =>{
        quantity< item.stock && setQuantity(quantity + 1)
    }

    return (
        <div className="container">
            <div className="producto-detalle">
                <img src={item.imagen} alt={item.titulo} />
                <div className= "producto-detalle--info">
                    <h3 className="titulo">{item.titulo}</h3>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="categoria">Categoría: {item.categoria}</p>
                    <p className="precio">${item.precio}</p>
                    <ItemCount
                    quantity={quantity} 
                    handleDecrement={handleDecrement} 
                    handleIncrement={handleIncrement}
                    handleAddToCart={()=>{addToCart(item, quantity)}}  />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail