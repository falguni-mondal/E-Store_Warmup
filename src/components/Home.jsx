import React, { useContext } from 'react'
import { ProductContext } from './utils/Context'
import { Link } from 'react-router-dom';
import Loading from './Loading';

const Home = () => {
  const { raw } = useContext(ProductContext);
  return (
    <div className='w-[80%] h-screen p-8 flex flex-wrap gap-4 overflow-y-auto overflow-x-hidden'>
      {
        raw? raw.map(item => (
          <Link key={item.id} to={`/productDescription/${item.id}`} className='w-[18.5%] h-60'>
            <div className='w-full h-full flex flex-col bg-white shadow shadow-zinc-400 rounded-md overflow-hidden'>
              <img className='w-full h-40 object-cover object-center hover:scale-105 transition-all' src={item.images} alt="" />
              <div className='w-full px-3 py-1'>
                <span className='block font-medium'>{`$${item.price}`}</span>
                <span className='block font-medium'>{item.title}</span>
              </div>
            </div>
          </Link>
        )) : <Loading />
      }
    </div>
  )
}

export default Home