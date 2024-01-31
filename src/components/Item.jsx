const Item = (item) => {
    return(
        
        
            <div className="card">
                <img className="productImg" src={item.image} alt={item.image} />
                <p className="productTxt">{item.product}</p>
                <p className="productPrice">{item.price}</p>
            </div>
       
    )
}

export default Item;