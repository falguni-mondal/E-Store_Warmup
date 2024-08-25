import React, { useContext } from 'react'
import { ProductContext } from './utils/Context'
import { useForm } from 'react-hook-form';

const AddProduct = (props) => {
    const {imageUrl, title, description, price, category, button, editHandler} = props;
    const { raw, setRaw } = useContext(ProductContext);
    const { register, handleSubmit } = useForm();
    const productAdder = (data)=>{
        data.id = data.title;
        setRaw([...raw, data]);
        console.log(raw)
    }
    return (
            <form onSubmit={handleSubmit(data=> button==='Add Product'? productAdder(data) : editHandler(data))} className='flex w-full h-full flex-col gap-2'>
                <input type="text" {...register('images')} className='w-full py-2 px-3 rounded placeholder:text-neutral-950' placeholder='Image URL' defaultValue={imageUrl} />
                <input type="text" {...register('title')} className='w-full py-2 px-3 rounded placeholder:text-neutral-950' placeholder='Title' defaultValue={title} />
                <input type="text" {...register('description')} className='w-full py-2 px-3 rounded placeholder:text-neutral-950' placeholder='Description' defaultValue={description} />
                <input type="number" {...register('price')} className='w-full py-2 px-3 rounded placeholder:text-neutral-950' placeholder='Price' defaultValue={price} />
                <input type="text" {...register('category.name')} className='w-full py-2 px-3 rounded-b placeholder:text-neutral-950' placeholder='Category' defaultValue={category} />
                <button type='submit' className='px-5 py-1.5 mt-5 border border-blue-700 rounded-md shodow bg-blue-600 text-white'>{button}</button>
            </form>
    )
}

export default AddProduct