import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const {allProductsQuantity} = useContext(CartContext);

    return (
        <>

        {allProductsQuantity() > 0 ?

        <Link to={'/cart'} className="link"> <button className="BotonCart"><p className="carritotx">Carrito</p></button><span className="numero">{allProductsQuantity()}</span></Link>

        :  

        <Link to={'/cart'}> <button className="BotonCart"><p className="carritotx">Carrito</p></button></Link> }

        </>
    )
}

export default CartWidget