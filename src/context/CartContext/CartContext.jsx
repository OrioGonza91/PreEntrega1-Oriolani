import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

export default function CartProvider({children}) {
    const [cart, setCart] = useState([]);
    
    const addToCart = (newItem, quantity) =>{
        const itemInCart = cart.find((item)=>item.id === newItem.id)

        if(itemInCart){
            const updatedCart = cart.map((item)=>{
                if(item.newItem.id === newItem.id) {
                    return {newItem, quantity: item.quantity + quantity}
                }
                return item;
            })
            setCart(updatedCart);
        } else {
            setCart([...cart, {newItem, quantity}])
        }

    }

    const clearCart =  () =>{
        setCart([]);
    }

    const removeFromCart = (id, quantity) =>{
        const itemInCart = cart.find((item)=> item.id === id)
        if(itemInCart){
            const updatedCart = cart.map((item) =>{
                if(item.id === id){
                    return {product: item.id, quantity: item.quantity - quantity}
                }
                return item
            })

            const filteredCart = updatedCart.filter((item)=>item.quantity > 0)

            setCart(filteredCart)
        }
    }

    const cartTotal = cart.reduce((acc, item)=>{
        return acc + item.price * item.quantity
    }, 0)


    return (
        <CartContext.Provider value={{cart, setCart, addToCart, clearCart, removeFromCart, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}

