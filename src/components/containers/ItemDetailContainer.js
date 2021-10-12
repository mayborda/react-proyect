import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spiner } from "../Íconos/Icons";
import { getFirestore } from "../../services/getFirebase";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  let idStr = parseInt(id);

  useEffect(() => {
    const dataBase = getFirestore();
    dataBase.collection("items")
      .where("id", "==", idStr)
      .get()

      .then((response) => {
        response.forEach((doc) => {
          setItem(doc.data());
        });
      })
      .catch(() => console.log("error"))
      .finally(() => setLoading(false));
  }, [idStr]);


  return (
    <div className="lg:h-1/2 lg:w-1/2 mx-auto">
      {loading ? <Spiner /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;