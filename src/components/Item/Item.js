import React from "react";
import { Link } from "react-router-dom";
import { InfoIcon } from "../Íconos/Icons";

const Item = ({ id, image, stock, name, price, description, category }) => {
  return (
    <div className="flex flex-col  justify-between my-20 mx-2 h-full lg:w-80 shadow-md rounded-md max-w-md w-full pb-2">
      <li className="relative h-full w-full">
        <Link to={`/details/${id}`}>
          <img
            src={image}
            placeholder="blurred"
            height={300}
            alt="item"
            className=" w-full h-80 rounded-t-md"
          />
          <InfoIcon className="absolute top-2 right-2 bg-transparent" />
        </Link>
      </li>
      <div className="ml-2">
        <h2 className="font-bold pt-2 text-xl text-secondary">{name}</h2>
        <h3 className="font-semibold ">
          {`$`}
          {price}
        </h3>
        <p className="h-12 tracking-normal">{description}</p>
        <p className="h-12 tracking-normal">{category}</p>
      </div>

      <div className="w-full pt-4 px-1 lg:px-2 space-y-2 flex flex-col items-center">
        <Link
          to={`/details/${id}`}
          className="py-2 px-4 bg-primary-light text-secondary text-center mt-2 shadow-md w-full max-w-xs"
        >
          Detalles
        </Link>
      </div>
    </div>
  );
};
export default Item;