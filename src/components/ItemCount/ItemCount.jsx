

function ItemCount({stock, count, increment, decrement}) {
    return (
        <div className="item__count--container">
            <div className="item__count--counter--container">
                <button className="item__count--button" onClick={decrement} disabled={count <=0}>
                    -
                </button>
                <span className="count">{count}</span>
                <button className="item__count--button" onClick={increment} disabled={count>=stock}>
                    +
                </button>
            </div>
            <button className="add__to__cart">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount