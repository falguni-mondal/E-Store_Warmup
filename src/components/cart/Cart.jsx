import React, { useContext, useState } from 'react'
import CartItem from './CartItem';
import { ProductContext } from '../utils/Context';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { raw } = useContext(ProductContext);
  const [price, setPrice] = useState(0);
  return (
    <div className='w-[80%] h-screen p-10 px-40 relative'>
      <div className='w-full h-[75%] flex flex-col gap-3 overflow-y-auto overflow-x-hidden'>
        {
          raw.filter(item => item.cart).length > 0 ?
            raw.filter(item => item.cart).map((item, index) => (
              <CartItem item={item} index={index} />
            )) : <div className='w-full h-[80%] flex justify-center items-center'><h1 className='text-black text-3xl'>No Items in Cart...</h1></div>
        }
      </div>
      <div className='fixed bottom-0 right-0 px-40 w-[80%] h-[25%] py-5 bg-sky-50'>
        <div className='w-full h-full border-t border-gray-500 p-3 flex justify-between'>
          <h1 className='text-2xl font-medium '>TOTAL PRICE</h1>
          <div className='flex flex-col justify-between items-center gap-3'>
            <span className='text-2xl font-medium'>{`$${price}`}</span>
            <Link className='py-2 px-5 text-md bg-amber-500 shadow-xl shadow-amber-400 rounded-md text-white' to='/buy'>Proceed</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart