import React from "react";
import { Link } from "react-router-dom";

export const AddToCart = ({ handleOnAdd }) => {
    return (
        <button
        onClick={handleOnAdd}
        className="flex items-center justify-between border-2 rounded-md max-w-xs w-full shadow-sm"
        >
        <span className="p-2 border-r-2 flex-shrink">
          <i class="fas fa-cart-plus"></i>
        </span>
        <h4 className="px-5 mx-auto">Agregar al carrito</h4>
        </button>
    );
};

export const RemoveIcon = () => (
    <button className="mx-2">
        <i class="far fa-trash-alt" ></i>
    </button>
);

export const FinishButton = () => {
  return (
    <Link
      to="/cart"
      className="flex items-center justify-between border-2 mt-2 rounded-md max-w-xs w-full bg-btn-chantelle hover:bg-btn text-tomThum font-bold py-2 px-4 "
    >
      <span className="px-5 p-2 mx-auto">Terminar compra</span>
    </Link>
  );
};

export const BackHome = () => {
    return (
        <Link
        to="/"
        className="flex items-center justify-between border-2 rounded-md max-w-xs w-full shadow-sm bg-transparent hover:bg-btn-chantelle text-tomThum font-semibold hover:text-shipGray py-2 px-4 border-transparent"
        >
          <i class="fas fa-home"></i>
          <span className="px-5 p-2 mx-auto">Seguir Comprando</span>
        </Link>
    );
};

export const BtnHome = ({ to, text }) => (
    <Link
      to={to}
      className=" flex items-center bg-btn text-shipGray max-w-sm h-12 rounded-md mx-auto"
    >
      {text}
    </Link>
  );
  
  export const BtnClearCart = ({ clearCart, text }) => (
    <button
      onClick={clearCart}
      className="flex items-center shadow-md bg-btn text-shipGray max-w-sm h-12 rounded-md mx-auto"
    >
      {text}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-1 mx-1 inline"
      >
        <path
          d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
          fill="#5F6368"
        />
      </svg>
    </button>
  );