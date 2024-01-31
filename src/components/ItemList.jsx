import { useState } from "react";
import Item from "./Item";
import products from "./productos.json";

const ItemList = ({items}) => {

    // const [products , setProducts] = useState(allProducts);

    return(
        <>
            {items.map ( item => 
                (<Item key = {item.id} item = {item}/>))} 
        </>
    )
}

export default ItemList;