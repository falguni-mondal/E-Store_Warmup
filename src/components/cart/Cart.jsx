import React, { useState } from 'react'
import CartItem from './CartItem';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { "id": 32, "title": "Elegant Solid Wood Dining Table", "price": 67, "description": "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.", "images": ["https://i.imgur.com/4lTaHfF.jpeg", "https://i.imgur.com/JktHE1C.jpeg", "https://i.imgur.com/cQeXQMi.jpeg"], "creationAt": "2024-08-21T23:58:57.000Z", "updatedAt": "2024-08-21T23:58:57.000Z", "category": { "id": 3, "name": "Furniture", "image": "https://i.imgur.com/Qphac99.jpeg", "creationAt": "2024-08-21T23:58:57.000Z", "updatedAt": "2024-08-21T23:58:57.000Z" }, "cart": false }
  ]);
  return (
    <div className='w-[80%] h-screen p-10 px-40 flex flex-col gap-3'>
      {
        cartItems ?
          cartItems.map((item, index) => (
            <CartItem item={item} index={index}/>
          )) : <h1 className='text-black text-3xl'>No Items in Cart</h1>
      }
    </div>
  )
}

export default Cart