import ItemCount from "../ItemCount/ItemCount"
import useCount from "../../hooks/useCount"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

function ItemDetail({item}) {
    const {count, decrement, increment, reset} = useCount(0);
    const {addToCart} = useContext(CartContext)

const handleAddToCart = () =>{
    addToCart(item, count);
    reset();
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
                    <ItemCount count={count} decrement={decrement} increment={increment} stock={item.stock}  />
                    <button className="add__to__cart" onClick={handleAddToCart} >Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail