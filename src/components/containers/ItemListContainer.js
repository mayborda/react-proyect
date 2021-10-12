import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../services/getFirebase";
import { Spiner } from "../Íconos/Icons";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const dataBase = getFirestore();
    dataBase.collection("items")
      .get()
      .then((response) => {
        if (response.size === 0) {
          console.log("vacio");
        } else {
          if (category === undefined) {
            setProducts(response.docs.map((i) => i.data()));
          } else {
            let data = response.docs.map((i) => i.data());
            setProducts(data.filter((i) => i.category === category));
          }
        }
      })
      .catch((error) => {
        console.log("No se encontraron productos", error);
      })
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div className="py-4 px-2 h-full border-b border-gray-300 mx-auto">
      <ul className="flex flex-col items-center min-w-md justify-center lg:px-4 lg:flex-row lg:flex-wrap w-full">
        {loading ? <Spiner /> : <ItemList products={products} />}
      </ul>
    </div>
  );
};

export default ItemListContainer;
