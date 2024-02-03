import { useEffect, useState } from "react";
import products from "./productos.json";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect( () => {
        const promesa = new Promise(resolve => {
            setTimeout (() => {
                let detalleProducto = products.find(item => item.id === parseInt(id)); // parseInt para que el valor que busque sea numero, sino busca string
                resolve(detalleProducto);
            }, 2000);
            })

            promesa.then(data => {
                setItem(data);
            
        })
    }, [id]);



    return (
    
            <ItemDetail item = {item}/>
        
    )
}

export default ItemDetailContainer;