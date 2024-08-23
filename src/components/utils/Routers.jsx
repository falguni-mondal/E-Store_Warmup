import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import ProductDescription from '../ProductDescription'
import Products from '../Products'
import Cart from '../Cart'
import AddProduct from '../AddProduct'

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productDescription/:title" element={<ProductDescription />} />
            <Route path="/:choice" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add product" element={<AddProduct />} />
        </Routes>
    )
}

export default Routers