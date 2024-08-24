import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductContext } from './utils/Context'
import Loading from './Loading'

const Products = () => {
  const { choice } = useParams()
  const { raw } = useContext(ProductContext);
  const items = raw? raw.filter(item => item.category.name === choice) : '';

  return (
    <div className='w-[80%] h-screen flex flex-wrap gap-4 p-8 overflow-y-auto overflow-x-hidden'>
      {
        items?
        items.map(item => (
          <Link key={item.id} to={`/productDescription/${item.title}`} className='w-[18.5%] h-60'>
            <div className='w-full h-full flex flex-col bg-white shadow shadow-zinc-400 rounded-md overflow-hidden'>
              <img className='w-full h-40 object-cover object-center hover:scale-105 transition-all' src={item.images} alt="" />
              <div className='w-full px-3 py-1'>
                <span className='block font-medium '>{`$${item.price}`}</span>
                <span className='block font-medium'>{item.title}</span>
              </div>
            </div>
          </Link>
        )) : <Loading/>
      }
    </div>
  )
}

export default Products