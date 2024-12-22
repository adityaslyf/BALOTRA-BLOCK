import React, { useState } from 'react';
import Checkout from '../components/Checkout';

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Kuttaar',
      price: 350,
      image: '/public/carousel1.jpeg'  // Adjust path as needed
    },
    {
      id: 2,
      name: 'Phooli',
      price: 400,
      image: '/public/carousel2.jpeg'
    },
    {
      id: 3,
      name: 'Nodana',
      price: 400,
      image: '/public/carousel3.jpeg'
    },
    {
      id: 4,
      name: 'Gul- Butah',
      price: 300,
      image: '/public/carousel4.jpeg'
    }
  ];

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
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
      setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="container mx-auto px-4 flex">
      <div className={`flex-1 ${showCheckout ? 'mr-6' : ''}`}>
        <div className="text-center my-8">
          <h1 className="text-4xl font-bold text-[#333333] mb-4">FABRIC STORE</h1>
          <p className="text-lg text-gray-600 mb-8">
            Support artisans and help preserve the traditional craft of Balotra Block Print—get yours today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-lg mb-4">Rs {product.price}/m</p>
              <button 
                className="bg-[#E6E6E6] text-black px-6 py-2 hover:bg-gray-300 transition-colors"
                onClick={() => addToCart(product)}
              >
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>

      {showCheckout && cartItems.length > 0 && (
        <div className="w-96">
          <Checkout 
            cartItems={cartItems} 
            updateQuantity={updateQuantity}
          />
        </div>
      )}
    </div>
  );
};

export default Shop;
