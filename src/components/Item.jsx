import { Link } from "react-router-dom";

const Item = (item) => {
    return(
<>

        
        <Link to={"/item/" + item.id} className="sinDecoracion">

        
        <div>
            
                <section className="cardBorder">
                    <div className="card">
                        <img className="productImg" src={item.image} alt={item.product} />
                            <div className="productInfo">
                                <p className="productTxt">{item.product}</p>
                            </div> 
                            <p className="productPrice">$ {item.price}</p>
                        <div className="botonCardPos">
                            <button className="botonCard">Añadir al carrito</button>
                        </div>
                    </div>
                </section>
            
        </div>
        


       </Link>

       
</>
    )
}

export default Item;