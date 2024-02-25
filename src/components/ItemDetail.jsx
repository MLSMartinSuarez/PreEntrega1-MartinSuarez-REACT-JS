import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
<>
        <div key={item.id}> 
            <div className="cardPos2">
                
                <img className="detailImg" src={item.image} alt={item.product} />
                         
                <div className="detailInfo">
                    <h2 className="detailProduct">{item.product}</h2>
                    <p className="detailDescription">{item.description}</p>
                    <p className="detailPrice">{item.price}</p>
                    <ItemCount/>
                </div>
            </div>
        </div> 
       
       
</>
    )
}

export default ItemDetail;