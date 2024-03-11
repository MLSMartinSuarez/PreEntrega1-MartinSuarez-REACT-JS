import { useEffect, useState } from "react";
import products from "./productos.json";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc, collection, addDoc, query, getDocs } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {

        const db = getFirestore();  // conexion

        const individualProduct = doc(db, "products", id) // metodo doc

        getDoc(individualProduct).then(promesaFirebaseDetail => {
            setLoading(false);
            setItem({id:promesaFirebaseDetail.id, ...promesaFirebaseDetail.data()});
            console.log("conectado al firebase")
        });
        }, [id]);



    return (
    <>
        {loading ? <Loading/> : <ItemDetail item = {item}/>}
    </>    
    )
}

export default ItemDetailContainer;