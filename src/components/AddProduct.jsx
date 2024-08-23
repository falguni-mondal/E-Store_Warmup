import React, { useContext } from 'react'
import { ProductContext } from './utils/Context'
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { raw, setRaw } = useContext(ProductContext);
    const { register, handleSubmit } = useForm();
    const productAdder = (data)=>{
        setRaw([...raw, data]);
        console.log(raw)
    }
    return (
        <div className='w-[80%] h-screen p-8 flex justify-center items-center overflow-y-auto overflow-x-hidden bg-zinc-200'>
            <form onSubmit={handleSubmit(data=>productAdder(data))} className='flex flex-col w-1/3 gap-2'>
                <input type="text" {...register('images')} className='w-full py-2 px-3 rounded placeholder:text-neutral-950' placeholder='Image URL' />
                <input type="text" {...register('title')} className='w-full py-2 px-3 rounded placeholder:text-neutral-950' placeholder='Title' />
                <input type="text" {...register('description')} className='w-full py-2 px-3 rounded placeholder:text-neutral-950' placeholder='Description' />
                <input type="number" {...register('price')} className='w-full py-2 px-3 rounded placeholder:text-neutral-950' placeholder='Price' />
                <input type="text" {...register('category.name')} className='w-full py-2 px-3 rounded-b placeholder:text-neutral-950' placeholder='Category' />
                <button type='submit' className='px-5 py-1.5 mt-5 border border-blue-700 rounded-md shodow bg-blue-600 text-white'>Add Product</button>
            </form>
        </div>
    )
}

export default AddProduct