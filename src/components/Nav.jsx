import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext } from './utils/Context';
import { PiShoppingCart } from "react-icons/pi";
import { TfiClose } from "react-icons/tfi";


const Nav = () => {
    const { raw } = useContext(ProductContext);
    const [ reveal, setReveal ] = useState(false);
    let category;
    const distinctCategory = () => {
        category = raw ? raw.map(item => item.category.name) : '';
        category = [...new Set(category)];
    }
    distinctCategory();
    const navRevealer = () => {
        setReveal(!reveal)
    }

    return (
        <div className="flex-shrink-0 nav-container fixed z-[99] lg:static w-screen lg:w-[20%] h-[6vh] lg:h-screen flex lg:block items-center justify-end px-8 lg:px-0 border-b bg-white">
            <span onClick={navRevealer} className='font-black lg:hidden'>Menu</span>
            <TfiClose onClick={navRevealer} className={`absolute z-50 ${reveal ? "block" : "hidden"} lg:hidden text-[1.5rem]`}/>
            <nav className={`${reveal ? "flex" : "hidden"} lg:${reveal ? "flex" : "flex"} w-full h-screen lg:h-fit absolute top-0 left-0 lg:static p-5 pt-20 lg:pt-8 flex flex-col items-center bg-white text-slate-900 overflow-x-hidden overflow-y-auto text-[1.2rem] lg:text-[1rem]`}>
                <NavLink onClick={navRevealer} to="/" className='px-8 py-1.5 border border-blue-700 rounded-md shodow bg-blue-600 text-white'>All Products</NavLink>
                <NavLink onClick={navRevealer} to="/add product" className='px-5 py-1.5 mt-3 border border-black rounded-md shodow text-black'>Add new product</NavLink>
                <div className='w-full mt-5 pt-3 border-t border-black min-h-[55vh]'>
                    <h1 className='text-[1.8rem] mb-5'>Categories</h1>
                    <ul className='w-full flex flex-col gap-2'>
                        {
                            category ?
                                category.map((item, index) => (
                                    <li key={index}><NavLink onClick={navRevealer} to={`/${item}`}>{item}</NavLink></li>
                                )) : ''
                        }
                    </ul>
                </div>
                <NavLink onClick={navRevealer} to='cart' className='w-[8vh] lg:w-14 h-[8vh] lg:h-14 lg:mt-10 text-2xl rounded-full bg-orange-500 shadow-orange-400 shadow-xl text-white flex justify-center items-center hover:scale-110 transition' ><PiShoppingCart /></NavLink>
            </nav>
        </div>
    )
}

export default Nav