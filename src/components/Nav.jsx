import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext } from './utils/Context';

const Nav = () => {
    const { raw } = useContext(ProductContext);
    let category;
    const distinctCategory = ()=>{
        category = raw? raw.map(item => item.category.name) : '';
        category = [...new Set(category)];
    }
    distinctCategory();

    return (
        <nav className='w-[20%] p-5 pt-8 flex flex-col items-center bg-white text-slate-900 overflow-x-hidden overflow-y-auto'>
            <NavLink to="/" className='px-8 py-1.5 border border-blue-700 rounded-md shodow bg-blue-600 text-white'>All Products</NavLink>
            <NavLink to="/add product" className='px-5 py-1.5 mt-3 border border-black rounded-md shodow text-black'>Add new product</NavLink>
            <div className='w-full mt-5 pt-3 border-t border-black'>
                <h1 className='text-2xl mb-5'>Categories</h1>
                <ul className='w-full flex flex-col gap-2'>
                    {
                        category?
                        category.map((item, index) => (
                            <li key={index}><NavLink to={`/${item}`}>{item}</NavLink></li>
                        )):''
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Nav