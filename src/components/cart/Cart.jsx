import React, { useContext, useEffect, useState } from 'react'
import CartItem from './CartItem';
import { ProductContext } from '../utils/Context';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { raw } = useContext(ProductContext);
  const [cartItem, setCartItem] = useState([]);
  const [price, setPrice] = useState(0);

  const cartFiller = async() => {
    raw && setCartItem(await raw.filter(item => item.cart))
  }
  useEffect(()=> {
    cartFiller();
  }, [ raw ])


  return (
    <div className='w-full lg:w-[80%] h-screen p-5 pt-[9vh] lg:p-10 lg:px-40 relative'>
      <div className='w-full h-[80%] lg:h-[75%] flex flex-col gap-3 overflow-y-auto overflow-x-hidden'>
        {
          cartItem.length !== 0 ?
            cartItem.map((item, index) => (
              <CartItem item={item} index={index} />
            )) : <div className='w-full h-[80%] flex justify-center items-center'><h1 className='text-black text-3xl'>No Items in Cart...</h1></div>
        }
      </div>
      <div className='fixed bottom-0 right-0 lg:px-40 w-full lg:w-[80%] h-[20%] lg:h-[25%]'>
        <div className='w-full h-full py-5 bg-white'>
          <div className='w-full h-full border-t border-gray-500 p-3 flex justify-between'>
            <h1 className='text-xl lg:text-2xl font-medium '>TOTAL PRICE</h1>
            <div className='flex flex-col justify-between items-center gap-3'>
              <span className='text-2xl font-medium'>{`$${price}`}</span>
              <Link className='py-2 px-5 text-md bg-blue-600 shadow-xl shadow-blue-500 rounded-md text-white' to='/buy'>Proceed</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart