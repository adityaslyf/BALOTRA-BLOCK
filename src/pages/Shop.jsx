import React, { useState } from "react";
import Checkout from "../components/Checkout";
import { RiAccountCircle2Fill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const products = [
    {
      id: 1,
      name: "Kuttaar",
      price: 350,
      image: "/public/carousel1.jpeg", // Adjust path as needed
    },
    {
      id: 2,
      name: "Phooli",
      price: 400,
      image: "/public/carousel2.jpeg",
    },
    {
      id: 3,
      name: "Nodana",
      price: 400,
      image: "/public/Carousel3.jpeg",
    },
    {
      id: 4,
      name: "Gul- Butah",
      price: 300,
      image: "public/Carousel4.jpg",
    },
  ];

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setShowCheckout(true);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== productId)
      );
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 flex flex-col lg:flex-row">
      <div className={`flex-1 ${showCheckout ? "lg:mr-6" : ""}`}>
        <div>
          <div className="flex flex-col sm:flex-row  justify-evenly items-center py-4 sm:py-8">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-2 sm:mb-4">
                FABRIC STORE
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl">
                Support artisans and help preserve the traditional craft of
                Balotra Block Print—get yours today!
              </p>
            </div>
            <div className="flex gap-4">
              <RiAccountCircle2Fill className="w-6 h-6 sm:w-8 sm:h-8" />
              <FaShoppingCart className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
          </div>
          <hr className="border-t-2 border-black mb-6 sm:mb-10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 sm:h-64 object-cover mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-base sm:text-lg mb-4">Rs {product.price}/m</p>
              <button
                className="bg-[#E6E6E6] text-black px-4 sm:px-6 py-2 hover:bg-gray-300 transition-colors"
                onClick={() => addToCart(product)}
              >
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>

      {showCheckout && cartItems.length > 0 && (
        <div className="w-full lg:w-96 mt-6 lg:mt-0">
          <Checkout cartItems={cartItems} updateQuantity={updateQuantity} />
        </div>
      )}
    </div>
  );
};

export default Shop;
