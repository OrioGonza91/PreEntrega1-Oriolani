import { Children, createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, quantity) => {
        const itemAdded = { ...item, quantity }
        const newCart = [...cart]

        const itemInCart = newCart.find((prod) => prod.id === itemAdded.id)
        if (itemInCart) {
            itemInCart.quantity += quantity
        } else {
            newCart.push(itemAdded)
        }
        setCart(newCart)
    }

    const cartCount = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, cartCount, cartTotal, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}