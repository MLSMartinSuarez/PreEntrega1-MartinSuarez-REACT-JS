import { createContext, useState } from "react";


export const CartContext = createContext();


const CartContextProvider = ( { children } ) => {

    const [cart, setCart] = useState([]);

    const addItemToCart = ( item , quantity ) => {

        if (itemValidationInCart ( item.id )) { // si el producto esta en el carrito...

            let positionInCart = cart.findIndex(product => product.id === id); // busco en todos los productos de mi json

            cart [ positionInCart ].quantity += quantity; // al encontrarlo, le suma a la PROPIEDAS CREADA quantity, porque ya existe en el carrito

            setCart ( [...cart] ); // spread para pushear al carrito la nueva quantity (VALOR)

        } else { // si no esta en el carrito, lo agrego

            cart.push ( { ...item, quantity:quantity } ) // el producto seleccionado con todas sus id se le agrega a la PROPIEDAD quantity

            setCart ( [...cart] ); // pusheado en cart

        }
    }

   
    const itemValidationInCart = (id) => {

        return cart.some(product => product.id === id); // me devuelve TRUE si encuentra el producto en el json

    }

    const clearCart = () => {

        setCart([]); // al ponerlo en un boton, me vuelve al estado original del use state, vacio

    }

    const removeItem = (id) => {

        const items = cart.filter(product => product.id != id);

        setCart([...items]);
    }

    const allProductsQuantity = () => {

        return cart.reduce((acum, product) => acum += product.quantity, 0);

    }

    const allProductsPrice = () => {

        return cart.reduce((acum, product) => acum += product.price * product.quantity, 0);

    }

    
    
    

    return (
        <CartContext.Provider value ={ { cart, addItemToCart, itemValidationInCart, clearCart, removeItem,  allProductsQuantity, allProductsPrice } }>

            {children}

        </CartContext.Provider>

    )

}

export default CartContextProvider;