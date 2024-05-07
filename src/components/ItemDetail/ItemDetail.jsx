import ItemCount from "../ItemCount/ItemCount"
import useCount from "../../hooks/useCount"

function ItemDetail({item}) {
    const {count, decrement, increment} =useCount(0);

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
                </div>
            </div>
        </div>
    )
}

export default ItemDetail