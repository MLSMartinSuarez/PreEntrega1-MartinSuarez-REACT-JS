import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./Context/CartContext";

const ItemDetail = ({item}) => {

    const {addItemToCart} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItemToCart(item, quantity);
    }


    return (
<>
        <div key={item.id}> 
            <div className="cardPos2">
                
                <img className="detailImg" src={item.image} alt={item.product} />
                         
                <div className="detailInfo">
                    <h2 className="detailProduct">{item.product}</h2>
                    <p className="detailDescription">{item.description}</p>
                    <p className="detailPrice">{item.price}</p>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div> 


       
       
</>
    )
}

export default ItemDetail;