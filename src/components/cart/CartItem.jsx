import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../utils/Context';

const CartItem = (props) => {
  const { images, title, category, description, price, id } = props.item
  const { index } = props
  const [qtty, setQtty] = useState(1);
  const { raw, setRaw } = useContext(ProductContext);
  const cartItemDeleter = () => {
    setRaw(
      raw.map(item => {
        if (item.id === id) {
          item.cart = false
        }
        return item
      })
    )
  }
  return (
    <div key={index} className='w-full h-32 rounded-md bg-white flex justify-between p-2 overflow-hidden flex-shrink-0'>
      <div className='h-full flex w-[85%] items-center'>
        <Link to={`/productDescription/${id}`} className='h-full'><img className='h-full object-cover rounded' src={images} alt="" /></Link>
        <div className="details w-[75%] h-[95%] overflow-hidden ml-5 leading-none">
          <div className="title-price flex justify-between">
            <Link to={`/productDescription/${id}`} className='font-semibold text-lg'>{title}</Link>
            <span className='font-semibold text-2xl'>{`$${price * qtty}`}</span>
          </div>
          <Link to={`/${category.name}`} className='inline-block text-zinc-600 text-sm font-medium'>{category.name}</Link>
          <p className='text-sm mt-2.5'>{description}</p>
        </div>
      </div>
      <div className="btns flex flex-col justify-between">
        <div className="quantity flex gap-2">
          <span onClick={() => setQtty((prev) => prev != 1 ? prev - 1 : 1)} className="w-6 h-6 flex justify-center items-center rounded-full bg-red-100 font-semibold cursor-pointer">-</span>
          <span className="w-10 h-6 flex justify-center items-center rounded bg-zinc-200">{qtty}</span>
          <span onClick={() => setQtty((prev) => prev + 1)} className="w-6 h-6 flex justify-center items-center rounded-full bg-green-100 font-semibold cursor-pointer">+</span>
        </div>
        <button onClick={cartItemDeleter} className='w-full h-10 rounded-md bg-red-500 text-white font-semibold'>Remove</button>
      </div>
    </div>
  )
}

export default CartItem