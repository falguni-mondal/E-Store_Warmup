import React, { useContext } from 'react'
import CartItem from './CartItem';
import { ProductContext } from '../utils/Context';

const Cart = () => {
  const { raw } = useContext(ProductContext);
  return (
    <div className='w-[80%] h-screen p-10 px-40 flex flex-col gap-3'>
      {
        raw.filter(item => item.cart).length > 0 ?
          raw.filter(item => item.cart).map((item, index) => (
            <CartItem item={item} index={index} />
          )) : <h1 className='text-black text-3xl'>No Items in Cart...</h1>
      }
    </div>
  )
}

export default Cart