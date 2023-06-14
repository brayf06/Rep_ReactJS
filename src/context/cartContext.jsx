import { createContext, useState } from "react";

export const cartContext = createContext({ cart: []})


export function CartContextProvider({children}){
    const [cart, setCart] = useState([])

    function addItem(item, count){
        const nuevoCarrito = [...cart]
        nuevoCarrito.push( {...item, count })
        setCart(nuevoCarrito)
    }

    function countItem(){
        let total = 0
        cart.forEach(item => { total += item.count})
        return total
    }

    function countTotalPrice(){
        let totalPrice = 0
        cart.forEach(item => {totalPrice += (item.precio * item.count)})
        return totalPrice
    }
    function clear(){
        cart.clear
    }
    function removeItem(idDelete){
        setCart(cart.filter(item => item.id != idDelete))
    }
    return (
        <cartContext.Provider value={ { cart, setCart, addItem, countItem, countTotalPrice, removeItem, clear } }>{children}</cartContext.Provider>
    )
}