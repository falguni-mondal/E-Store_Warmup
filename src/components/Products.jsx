import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductContext } from './utils/Context'
import Loading from './Loading'

const Products = () => {
  const { choice } = useParams()
  const { raw } = useContext(ProductContext);
  const items = raw ? raw.filter(item => item.category.name === choice) : '';

  return (
    <div className='w-full lg:w-[80%] min-h-screen p-8 pt-20 lg:pt-8 flex justify-center flex-wrap gap-4 lg:overflow-y-auto overflow-x-hidden'>
      {
        items ?
          items.map(item => (
            <Link key={item.id} to={`/productDescription/${item.id}`} className='w-[75%] lg:w-[18.5%] h-[33vh] lg:h-60'>
              <div className='w-full h-full flex flex-col bg-white shadow shadow-zinc-400 rounded-md overflow-hidden'>
                <img className='w-full h-52 lg:h-40 object-cover object-center lg:hover:scale-105 hover:scale-110 transition-all' src={item.images} alt="" />
                <div className='w-full px-3 py-1'>
                  <span className='block font-medium '>{`$${item.price}`}</span>
                  <span className='block font-medium w-full overflow-hidden text-ellipsis text-nowrap'>{item.title}</span>
                </div>
              </div>
            </Link>
          )) : <Loading />
      }
    </div>
  )
}

export default Products