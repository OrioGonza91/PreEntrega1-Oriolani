
function ItemCount({quantity, handleDecrement, handleIncrement, handleAddToCart}) {

    return (
        <div className="item__count--container">
            <div className="item__count--counter--container">
                <button className="item__count--button" onClick={handleDecrement} disabled={quantity <=0}>
                    -
                </button>
                <span className="count">{quantity}</span>
                <button className="item__count--button" onClick={handleIncrement}>
                    +
                </button>
                <button className="add__to__cart" onClick={handleAddToCart}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount