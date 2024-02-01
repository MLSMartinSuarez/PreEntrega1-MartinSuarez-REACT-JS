const Item = (item) => {
    return(
        
        
            <div className="card">
                    <img className="productImg"  src={item.image} alt={item.product} />
                    <p className="productTxt">{item.product}</p>
                    <p className="productPrice">{item.price}</p>
                    <button className="BotonCart">Añadir al carrito</button>
            </div>
       
    )
}

export default Item;