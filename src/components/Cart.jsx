import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {

    const { cart, addItemToCart, itemValidationInCart, clearCart, removeItem, allProductsQuantity, allProductsPrice } = useContext(CartContext);

    if (allProductsQuantity() == 0) {
        return (
            <div className="fondo2">
                <div className="fondo">
                    <div className="items">
                        <div className="title">
                            <h1>Blanco Carmiel</h1>
                            <p>items <span>{allProductsQuantity()}</span></p>
                        </div>
                        <div className="emptycart">
                            <p>NO SE ENCONTRARON PRODUCTOS EN TU CARRITO</p>
                        </div>
                        <div className="checkout BotonCart">
                            <p>Precio total : <span>${allProductsPrice()}</span></p>
                        </div>
                        <div className="volver">
                            <Link to={'/'}> <button className="btnvolver BotonCart">volver al sitio</button> </Link>
                            <button onClick={clearCart} className="btnvolver BotonCart">VACIAR CARRITO</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="fondo2">
            <div className="fondo">
                <div className="items">
                    <div className="title">
                        <h1>Blanco Carmiel</h1>
                        <p>items <span className="totalProductos">{allProductsQuantity()}</span></p>
                    </div>
                    <div>
                        {cart.map(product =>
                            <div className="productos" key={product.id}>
                                <img className="imagen" src={product.image} alt={product.name} />
                                <h3 className="producto">{product.product}</h3>
                                <h4 className="precio">{product.price}</h4>
                                <p className="cantidad"><span>{product.quantity}</span></p>
                                <p className="remover" onClick={() => { removeItem(product.id) }}>X</p>
                            </div>)}
                    </div>
                    <div className="checkout">
                        <p>Precio total : <span><b>${allProductsPrice()}</b></span></p>
                        <Link to={"/checkout"}> <button className="btncheckout BotonCart" >Checkout</button></Link>
                    </div>
                    <div className="volver">
                        <Link to={'/'}> <button className="btnvolver BotonCart">Volver al Sitio</button> </Link>
                        <button onClick={clearCart} className="btnvolver BotonCart">Vaciar Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;


