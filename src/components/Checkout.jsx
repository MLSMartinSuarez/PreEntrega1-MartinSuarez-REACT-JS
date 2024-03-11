import { useContext, useState } from "react";
import { CartContext } from "./Context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [orderId, setOrderId] = useState();
    const { cart, allProductsQuantity, allProductsPrice, clearCart } = useContext(CartContext);

    const newOrder = () => {

        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }

        // datos del comprador

        const buyer = { name: nombre, email: email, phone: telefono };

        const products = cart.map(product => ({ id: product.idx, product: product.product, price: product.price }));

        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;

        const total = allProductsPrice();

        // orden completa 

        const completeOrder = { buyer: buyer, products: products, date: date, total: total };

        // subir orden al firestore

        const db = getFirestore();

        const orderCollection = collection(db, "allOrders");

        addDoc(orderCollection, completeOrder).then(promesaFirebaseOrder => {
            clearCart();
            setOrderId(promesaFirebaseOrder.id);
        });
    }

    return (
        <div>
            <div className="checkoutBgd">
                <div>
                    <div className="title">
                        <h1>Blanco Carmiel</h1>
                        <div className="itemsTotal"><p>items <span className="totalProductos">{allProductsQuantity()}</span></p></div>
                        <h3 className="itemsTotal">Total: $ {allProductsPrice()}</h3>
                    </div>
                    <div>
                        {cart.map(product =>
                            <div className="productos" key={product.id}>
                                <img className="imagen" src={product.image} alt={product.name} />
                                <h3 className="producto">{product.product}</h3>
                                <h4 className="precio">{product.price}</h4>
                                <p className="cantidad"><span>{product.quantity}</span></p>
                            </div>)}
                    </div>
                </div>
                <form className="form">
                    <div className="input">
                        <label ><b>Nombre</b></label>
                        <input type="text" onInput={(e) => { setNombre(e.target.value) }} />
                    </div>
                    <div className="input">
                        <label ><b>Email</b></label>
                        <input type="text" onInput={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="input">
                        <label ><b>Telefono</b></label>
                        <input type="text" onInput={(e) => { setTelefono(e.target.value) }} />
                    </div>
                    <button type="button" onClick={newOrder}>Generar Orden de Compra</button>
                </form>
            </div>
            <div className="buyComplete">
                    {orderId ? 
                    <div className="">
                        <h1>Gracias por Elegir Blanco Carmiel</h1>
                        <h2>Tu ID de Compra es: {orderId}</h2>
                    </div> : ""}
            </div>
        </div>

    )                    
}

export default Checkout;