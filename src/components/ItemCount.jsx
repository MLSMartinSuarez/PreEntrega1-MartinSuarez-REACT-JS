import { useState } from "react"

const ItemCount = ({stock}) => {

    const [counter, setCounter] = useState(1);

    const [itemStock, setItemStock] = useState(stock);

    const increase = () => {
        if (counter < itemStock) {
            setCounter(counter + 1);
        }
    }
 
    const decrease = () => {
        if (counter > itemStock) {
            setCounter(counter -1);
        }
    }

    const onAdd = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
            alert ("agregaste" + counter + "productos al Carro!" + "quedan" + (itemStock - counter) + "de este producto");
        }
    }

    return (
        <>
        <div className="AddCartButton">
            <button className="botonCard">+</button>
            <button className="botonCard">Agregar al carrito</button>
            <button className="botonCard">-</button>
         </div>
        </>
    )
}   

export default ItemCount;