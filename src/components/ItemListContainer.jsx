import { useEffect, useState } from "react";
import products from "./productos.json";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    useEffect( () => {
        const promesa = new Promise (resolve => {
            setTimeout ( () => {
                resolve(products);
            }, 2000);
        })

        promesa.then(data => {
            setItems(data);
            console.log(data);
        })
    }, []);




    return(
        
        <div className="cardPos">
            <ItemList items={items}/>
        </div>
        
    )
}

export default ItemListContainer;