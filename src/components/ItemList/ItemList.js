import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => (
  <>
    {products.map((i) => (
      <Item
        id={i.id}
        name={i.name}
        price={i.price}
        image={i.url}
        stock={i.stock}
        description={i.description}
        category={i.category}
      />
    ))}
  </>
);

export default ItemList;