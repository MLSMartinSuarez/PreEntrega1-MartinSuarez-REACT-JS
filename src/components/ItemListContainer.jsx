import { useEffect, useState } from "react";
import products from "./productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Banner from "./Banner";
import Productos from "./Productos";
import { getFirestore, collection, addDoc, query, getDocs } from "firebase/firestore";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams();

    // useEffect ( () => {
    //     const db = getFirestore()
    //     const productsCollectionInFirebase = collection(db , "products");
    //     products.forEach(products => {
    //         addDoc(productsCollectionInFirebase, products);
    //     });
    //     console.log("hecho");
    // }, [])
    
        

    useEffect(() => {

        const db = getFirestore(); // CONEXION

        const productsCollectionInFirebase = collection (db, "products"); // REFERENCIA DE DONDE ESTAN LOS PRODUCTOS EN FIREBASE

        const q = id ? query(productsCollectionInFirebase, where ("category", "==", id)) : productsCollectionInFirebase; // si tengo un id filtra sino, todos los productos

        getDocs(q).then(promesaFirebase => { // al ser promesa, capturo con then
            // setLoading (false);
            setItems (promesaFirebase.docs.map (products => ( { id:products.id , ...products.data() } ) ) ); // creo un array, y lo mapeo desde firebase
        } ) ;
    }, [id] ); // darle parametro id para que filtre en la pagina





// ----------------------------------------------------------------------------------------------------//


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