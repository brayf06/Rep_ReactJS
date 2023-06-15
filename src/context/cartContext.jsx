import { createContext, useState } from "react";
import Swal from 'sweetalert2'

export const cartContext = createContext({ cart: []})


export function CartContextProvider({children}){
    const [cart, setCart] = useState([])

    function addItem(item, count){
        const nuevoCarrito = [...cart]

        if (isInCart(item.id)){
            let newCart = cart.map(cartItem => {
                if (cartItem.id === item.id){
                    return { ...cartItem, count: cartItem.count + count} 
                }
                else{
                    return { ...cartItem}
                }
            })
            setCart(newCart)
        }
        else{            
            nuevoCarrito.push( {...item, count })
            setCart(nuevoCarrito)
        }
    }

    function isInCart(id){
        return cart.some((item) => item.id === id)
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
    function clearCart(){
        const carritoVacio = []
        setCart(carritoVacio)
    }
    function removeItem(idDelete){
        setCart(cart.filter(item => item.id != idDelete))
        let itemGuardado = cart.find((item => item.id === idDelete))
        Swal.fire(
            '¡Reserva cancelada!',
            `Quitaste tus ${itemGuardado.count} pasajes a ${itemGuardado.pais} con destino a la ciudad de ${itemGuardado.ciudad} con exito`,
            'success'
          )
    }
    return (
        <cartContext.Provider value={ { cart, setCart, addItem, countItem, countTotalPrice, removeItem, isInCart, clearCart } }>{children}</cartContext.Provider>
    )
}