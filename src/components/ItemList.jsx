import React from "react";
import Item from "./Item";
import Loading from "./Loading";
import { useEffect, useState } from "react";


const ItemList = ({ items }) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading (false);

    }, );


  return (
    <div className="cardPos">
      {loading ? <Loading/> : items.map((item) => (
        <div key={item.id}>
           <Item {...item} />  
        </div>
      ))}
    </div>
  );
};


export default ItemList;