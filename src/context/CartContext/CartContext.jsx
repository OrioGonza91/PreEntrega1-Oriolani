import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

const cartInitialState = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(cartInitialState)

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

    const removeFromCart = ()=> {
        
    }

    const clearCart = () => {
        setCart([])
    }

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    return (
        <CartContext.Provider value={{ cart, addToCart, cartCount, cartTotal, clearCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}