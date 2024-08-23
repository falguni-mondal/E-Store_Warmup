import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import axios from './utils/axios';
import Loading from './Loading';
import { ProductContext } from './utils/Context';

const ProductDescription = () => {
  const { title } = useParams();
  const { raw } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  setTimeout(()=>{
    setProduct(raw.filter((item) => item.title === title)[0])
  }, 0)
  // const getProduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setProduct(data);
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(() => {
  //   getProduct();
  // }, [])
  return (
    product ?
      <div className='w-[80%] h-screen p-10 overflow-y-auto overflow-x-hidden flex justify-center items-center gap-10'>
          <img className='h-[60%] object-contain rounded' src={product.images} alt="" />
          <div className="product-details w-[30%]">
            <h1 className='w-full text-3xl font-medium'>{product.title}</h1>
            <div className='w-[90%] flex justify-between items-center'>
              <span className='category text-sm text-zinc-500'>{product.category.name}</span>
              <span className='price text-2xl font-medium'>{`$${product.price}`}</span>
            </div>
            <p className='description text-sm mt-3'>{product.description}</p>
            <div className='flex gap-4 mt-5'>
              <Link to="/cart" className='bg-blue-600 text-white rounded px-3 py-1.5'>Buy Now</Link>
              <Link className='bg-black text-white rounded px-3 py-1.5'>Add to cart</Link>
            </div>
          </div>
      </div> : <Loading />
  )
}

export default ProductDescription