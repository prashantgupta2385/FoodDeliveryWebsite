import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8 mt-10 px-4 md:px-10">
      <div className="place-order-left w-full md:max-w-[35%] lg:max-w-[500px] bg-white p-6 rounded-lg shadow-md">
        <p className="text-2xl font-semibold mb-6 text-gray-800">Delivery Information</p>
        <div className="multi-fields flex gap-3 mb-4">
          <input type="text" placeholder="First name" className="input-field border border-gray-300 rounded-md p-3 w-full" />
          <input type="text" placeholder="Last name" className="input-field border border-gray-300 rounded-md p-3 w-full" />
        </div>
        <input type="email" placeholder="Email address" className="input-field border border-gray-300 rounded-md p-3 w-full mb-4" />
        <input type="text" placeholder="Street" className="input-field border border-gray-300 rounded-md p-3 w-full mb-4" />
        <div className="multi-fields flex gap-3 mb-4">
          <input type="text" placeholder="City" className="input-field border border-gray-300 rounded-md p-3 w-full" />
          <input type="text" placeholder="State" className="input-field border border-gray-300 rounded-md p-3 w-full" />
        </div>
        <div className="multi-fields flex gap-3 mb-4">
          <input type="text" placeholder="Zip code" className="input-field border border-gray-300 rounded-md p-3 w-full" />
          <input type="text" placeholder="Country" className="input-field border border-gray-300 rounded-md p-3 w-full" />
        </div>
        <input type="text" placeholder="Phone" className="input-field border border-gray-300 rounded-md p-3 w-full" />
      </div>
      
      <div className="place-order-right w-full md:max-w-[45%] lg:max-w-[500px]">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-gray-600">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between text-gray-600">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-lg">
              <p>Total</p>
              <p>${getTotalCartAmount() + (getTotalCartAmount() === 0 ? 0 : 2)}</p>
            </div>
          </div>
          <button className="mt-6 w-full bg-[#FF6347] text-white py-3 rounded-md text-lg font-medium hover:bg-red-600 transition">
            PROCEED TO PAYMENT  
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;