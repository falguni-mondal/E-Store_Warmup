import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import axios from './utils/axios';
import Loading from './Loading';
import { ProductContext } from './utils/Context';
import ProductForm from './ProductForm';

const ProductDescription = () => {
  const { id } = useParams();
  const { raw, setRaw } = useContext(ProductContext);
  const [product, setProduct] = useState();
  const [edit, setEdit] = useState(false);
  setTimeout(() => {
    setProduct(raw.filter((item)=> item.id == id)[0])
  }, 0)
  
  const editHandler = (data)=>{
    const tempData = [...raw];
    const index = raw.indexOf(product)
    tempData[index].images = data.images;
    tempData[index].title = data.title;
    tempData[index].description = data.description;
    tempData[index].price = data.price;
    tempData[index].category = data.category;
    setRaw(tempData);
    alert("Updated!")
    setEdit(!edit);
  }

  const deleteHandler = ()=>{
    const tempData = [...raw];
    tempData.splice(raw.indexOf(product), 1);
    setRaw(tempData);
  }

  const cartAdder = ()=>{
    const tempData = [...raw];
    tempData[raw.indexOf(product)].cart = !tempData[raw.indexOf(product)].cart;
    setRaw(tempData);
  }
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
        <div className='w-70% h-[50vh]'>
          <img className='h-[90%] object-contain rounded' src={product.images} alt="" />
          <div className='edit-del flex gap-4 mt-3'>
            <Link onClick={() => setEdit(!edit)} className='w-20 h-10 flex justify-center items-center rounded border border-green-500 text-green-500 text-sm'>{edit? 'Cancel' : 'Edit'}</Link>
            <Link to='/' onClick={() => deleteHandler()} className='w-20 h-10 flex justify-center items-center rounded border border-red-500 text-red-500 text-sm'>Delete</Link>
          </div>
        </div>
        {edit?
          <div className={` edit-item w-[30%] bg-[#00000039] h-auto p-3 backdrop-blur-xl rounded-md`}>
          <ProductForm imageUrl={product.images} title={product.title} description={product.description} price={product.price} category={product.category.name} button={'Update Product'} editHandler={editHandler} />
        </div> :
        <div className="product-details w-[30%]">
        <h1 className='w-full text-3xl font-medium'>{product.title}</h1>
        <div className='w-[90%] flex justify-between items-center'>
          <span className='category text-sm text-zinc-500'>{product.category.name}</span>
          <span className='price text-2xl font-medium'>{`$${product.price}`}</span>
        </div>
        <p className='description text-sm mt-3'>{product.description}</p>
        <div className='buy-cart flex gap-4 mt-5'>
          <Link to="/cart" className='bg-blue-600 text-white rounded px-3 py-1.5'>Buy Now</Link>
          <Link onClick={cartAdder} className='bg-black text-white rounded w-28 flex justify-center py-1.5'>{product.cart? 'Added' : 'Add to cart'}</Link>
        </div>
      </div>
        }
      </div> : <Loading />
  )
}

export default ProductDescription