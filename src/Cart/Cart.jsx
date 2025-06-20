import React, { useState } from "react";

export default function CartPage({ count, setCount }) {
  const totalPrice = count.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const onRemove = (itemToRemove) => {
    setCount(count.filter((item) => item !== itemToRemove));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Your Cart</h2>

        {count.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {count.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                    <p className="text-gray-500">Price: ₹{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="text-right text-lg font-semibold mt-4">
              Total: ₹{totalPrice.toFixed(2)}
            </div>

            <div className="text-right">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-700 transition">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

