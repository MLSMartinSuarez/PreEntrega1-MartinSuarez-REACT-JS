// import Item from "./Item";


// const ItemList = ({items}) => {

    

//     return(
//         <>
//             {items.map ( item => 
//             (<Item key = {item.id} item = {item}/>))} 
//         </>
        
//     )
// }

// export default ItemList;

import React from "react";
import Item from "./Item";


const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
           <Item {...item} />  
        </div>
      ))}
    </>
  );
};


export default ItemList;