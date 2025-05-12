import React, {useEffect, useState} from "react";
import axios from '../utils/axios'

const Show = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    

    axios
      .get('/products')
      .then((products) => {
        console.log(products);
        setProducts(products.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(()=> {
    getProducts()
  },[])
  return (
    <>
      <button
        className="px-5 py-3 bg-red-300 rounded-md text-white text-xs font-semibold"
        onClick={getProducts}
      >
        Call Product API
      </button>

      <ul>
        {products.length > 0 ? (
          products.map((p) => (
            <li className=" rounded mb-3 w-1/4 p-5 bg-red-200">{p.title}</li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </>
  );
};

export default Show;
