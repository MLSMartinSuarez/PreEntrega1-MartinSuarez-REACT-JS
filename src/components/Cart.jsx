import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {

    const {cart, addItemToCart, itemValidationInCart, clearCart, removeItem,  allProductsQuantity, allProductsPrice} = useContext(CartContext);

    if (allProductsQuantity() == 0) {
        return (
            <div className="fondo2">
            <div className="fondo">
                <div className="items">
                    <div className="title">
                        <h1>Tienda Cufa</h1> 
                        <p>items <span>{allProductsQuantity()}</span></p>
                    </div>
                    <div className="emptycart">
                        <p>NO SE ENCONTRARON PRODUCTOS EN TU CARRITO</p>
                    </div>
                    <div className="checkout">
                        <p>Precio total : <span>${allProductsPrice()}</span></p>
                        <button>pagar</button>
                    </div>
                    <div className="volver">
                        <button>volver al sitio</button>
                        <button onClick={clearCart}>VACIAR CARRITO</button>
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
                        <h1>Tienda Cufa</h1> 
                        <p>items <span className="totalProductos">{allProductsQuantity()}</span></p>
                    </div>
                    <div>
                        {cart.map(product =>
                            
                            <div className="productos" key={product.id}>

                            <img className="imagen" src={product.image} alt={product.name} />
                            <h3 className="producto">{product.product}</h3>
                            <h4 className="precio">{product.price}</h4>
                            <p className="cantidad"><span>{allProductsQuantity()}</span></p>
                            <a href="" className="remover" onClick={removeItem}>X</a> 
                            

                            </div>

                            )}
                        
                    </div>    
                        
                    
                    <div className="checkout">
                        <p>Precio total : <span>${allProductsPrice()}</span></p>
                        <button>pagar</button>
                    </div>
                    <div className="volver">
                        <button>volver al sitio</button>
                        <button onClick={clearCart}>VACIAR CARRITO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;


     