import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../Database/products";
import { Link } from "react-router-dom";

export default function SingleProduct({ count, setCount }) {
  const { category } = useParams();

  const match = products.find((item) => item.category.toLowerCase() === category.toLowerCase());

  const items = match ? match.items : [];

  const addCount = (product) => {
    setCount([...count , product]);
  
  };

  const[plus , setPlus] = useState(1);

  const addone = ()=>(
    setPlus(plus+1)
  )
  

  return (
    <div className="w-[90%] m-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Product</h1>
      <div className="flex flex-wrap gap-6">
        {items.length > 0 ? (
          items.map((product, index) => (
            <div key={index} className="w-[200px] p-4 rounded-xl shadow-lg">
              <Link to="/singlecatogry">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-[120px] object-cover rounded-md mb-2"
              />
              </Link>
              <Link to="/singlecatogry">
                <h2 className="text-lg font-semibold">{product.name}</h2>
              </Link>
              <p className="text-sm text-gray-600">
                {product.price} ₹ / {product.unit}
              </p>
              <p className="text-sm text-yellow-600">
                ⭐ {product.reviews} ({product.reviewCount} reviews)
              </p>
              <button className="bg-[green] px-3 py-1 rounded mt-3  text-white " onClick={addone}>+{plus}</button>&nbsp;
              <button
                className="bg-[green] px-3 py-1 rounded mt-3 text-white"
                onClick={() => addCount(product)}>
                Add to cart
              </button>
              <div>
                <button className="bg-[green] px-3 py-1 rounded mt-3  text-white " onClick={addone}>+{plus}</button>&nbsp;
                <button className="bg-[green] px-3 py-1 rounded mt-3 text-white">1</button>
              </div>
              
              
              
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
    
  );
}
