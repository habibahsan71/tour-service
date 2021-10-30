import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {

                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div>
            <h1 className='text-center my-5'>Add Service</h1>

            <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
                <input className='w-50 my-3' {...register("name")} placeholder='Place name' />
                <br />
                <input className='w-50 my-3'  {...register("description")} placeholder='description' />
                <br />
                <input className='w-50 my-3' type="number" {...register("price")} placeholder='price' />
                <br />
                <input className='w-50 my-3'  {...register("img")} placeholder='add image' />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;