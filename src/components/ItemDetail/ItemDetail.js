import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";


const ItemDetail = ({ item }) => {
  const { setCart, addItem } = useCartContext();

  const onAdd = (count) => {
    setCart(count);
    addItem(item, count);
  };

  return (
    <div className="flex items-center w-full">
      <div
        className="flex flex-col xl:flex-row items-center justify-around min-h-full w-full py-4 my-20 border-2  bg-secondary-light"
        key={item.id}
      >
        <img
          src={item.url}
          placeholder="blurred"
          alt="item"
          width={300}
          height={400}
          className=" h-80 shadow-md rounded-md"
        />
        <div className="flex flex-col justify-around h-72 ml-2">
          <h2 className="font-bold pt-2 text-xl text-secondary">{item.name}</h2>
          <p className="h-12 text-secondary">{item.description}</p>
          <h3 className="font-semibold text-secondary">
            {`$`}
            {item.price}
          </h3>
          <div className="flex flex-col">
            <ItemCount stock={item.stock} onAdd={onAdd}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;