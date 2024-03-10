import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import stock from "./productos.json";

const ItemCount = ({stock, onAdd}) => {

    const [counter, setCounter] = useState(1);

    const [itemStock, setItemStock] = useState(stock);

    const [cart, setCart] = useState(true);

    const increase = () => {
        if (counter < itemStock) {
            setCounter(counter + 1);
        }
    }
 
    const decrease = () => {
        if (counter > 1) {
            setCounter(counter -1);
        }
    }

    const toCart = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
            onAdd(counter);
            setCart(false);
            alert("agregaste " + counter + " productos al Carro!");
            console.log("Quedan " + (itemStock - counter) + " de este producto");
        }
    }

    return (
        <>
        <div className="AddCartButton">
            <Link to={'/'}><button className="botonCard">Seguir comprando</button></Link>
            <button className="botonCard" onClick={increase}>+</button>
            <button className="botonCard">{counter}</button>
            <button className="botonCard" onClick={decrease}>-</button> 
           {cart ? <button className="botonCard" onClick={toCart}>Agregar al carrito</button> : <Link to={'/cart'}> <button className="botonCard"> Terminar Compra </button> </Link>} 
         </div>
        </>
    )
}   

export default ItemCount;