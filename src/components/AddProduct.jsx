import React from 'react'
import ProductForm from './ProductForm'

const AddProduct = () => {
    return (
        <div className='w-[80%] h-screen p-8 flex justify-center items-center overflow-y-auto overflow-x-hidden bg-zinc-200'>
            <div className='w-1/3'>
                <ProductForm button={'Add Product'} />
            </div>
        </div>
    )
}

export default AddProduct