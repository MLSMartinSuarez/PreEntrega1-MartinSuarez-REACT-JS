import { useEffect, useState } from "react";
import Products from "./productos.json";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    useEffect( () => {
        const promesa = new Promise (resolve => {
            setTimeout ( () => {
                resolve(Products);
            }, 2000);
        })

        promesa.then(data => {
            setItems(data);
            console.log(data);
        })
    }, []);




    return(
        <>
            
        </>
    )
}

export default ItemListContainer