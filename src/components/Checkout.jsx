import React from 'react';

const Checkout = ({ cartItems, updateQuantity }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="bg-[#8B6B4D] p-6 rounded-lg text-white">
      <h2 className="text-3xl mb-6">Checkout</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="bg-white text-black rounded-lg p-4 mb-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>Rs {item.price}/m</p>
            </div>
          </div>
          
          <div className="flex items-center border border-gray-300">
            <button 
              className="px-3 py-1 hover:bg-gray-100"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <span className="px-3 py-1">{item.quantity}</span>
            <button 
              className="px-3 py-1 hover:bg-gray-100"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center mt-6 text-xl">
        <h3>Subtotal</h3>
        <p>Rs {subtotal}</p>
      </div>
    </div>
  );
};

export default Checkout;
