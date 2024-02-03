import { useEffect, useState } from "react";
import products from "./productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Banner from "./Banner";
import Productos from "./Productos";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect( () => {
        const promesa = new Promise (resolve => {
            setTimeout ( () => {
                resolve(id ? products.filter(item => item.category === id) : products);
            }, 2000);
        })

        promesa.then(data => {
            setItems(data);
        })
    }, [id]);




    return(
         
        <>
            {id ? "" : <Banner />}
        <div>
            {id ? "" : <Productos/>}
        </div>
        <div className="cardPos">
            <ItemList items={items}/>
        </div>
        </>
    )
}

export default ItemListContainer;