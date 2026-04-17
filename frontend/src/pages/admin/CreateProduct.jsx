import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { asyncCreateProduct } from '../../store/actions/productActions';

const CreateProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const createProductHandler = (product) => {
        product.id = nanoid();
        dispatch(asyncCreateProduct(product));
        navigate('/');
        reset();
    };

    const fields = [
        { name: "title", label: "Product Title", type: "text", placeholder: "Enter Product Title" },
        { name: "image", label: "Image URL", type: "url", placeholder: "Enter Image URL" },
        { name: "price", label: "Price", type: "text", placeholder: "Enter Price" },
        { name: "category", label: "Category", type: "text", placeholder: "Enter Category" },
    ];

    return (
        <div className="min-h-screen bg-[#1A1A2E] flex items-center justify-center px-4">
            <div className="w-full max-w-lg bg-[#16213E] border border-[#0F3460] rounded-2xl p-8 shadow-xl">

                <h2 className="text-[#EAEAEA] text-2xl font-bold mb-1 tracking-wide">New Product</h2>
                <p className="text-[#8892A4] text-sm mb-8">Fill in the details to add a product</p>

                <form onSubmit={handleSubmit(createProductHandler)} className="flex flex-col gap-5">

                    {fields.map(({ name, label, type, placeholder }) => (
                        <div key={name} className="flex flex-col gap-1">
                            <label className="text-[#8892A4] text-xs uppercase tracking-widest pl-1">{label}</label>
                            <input
                                {...register(name, { required: true })}
                                className="bg-[#1A1A2E] border border-[#0F3460] focus:border-[#E94560] outline-none text-[#EAEAEA] placeholder-[#8892A4] rounded-xl px-4 py-3 text-sm transition-colors duration-200"
                                type={type}
                                placeholder={placeholder}
                            />
                            {errors[name] && (
                                <span className="text-[#E94560] text-xs pl-1">{label} is required</span>
                            )}
                        </div>
                    ))}

                    <div className="flex flex-col gap-1">
                        <label className="text-[#8892A4] text-xs uppercase tracking-widest pl-1">Description</label>
                        <textarea
                            {...register("description", { required: true })}
                            className="bg-[#1A1A2E] border border-[#0F3460] focus:border-[#E94560] outline-none text-[#EAEAEA] placeholder-[#8892A4] rounded-xl px-4 py-3 text-sm transition-colors duration-200 h-24 resize-none"
                            placeholder="Enter Description"
                        />
                        {errors.description && (
                            <span className="text-[#E94560] text-xs pl-1">Description is required</span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="bg-[#E94560] hover:bg-[#FF6B6B] active:scale-95 text-white font-semibold py-3 rounded-xl transition-all duration-200 mt-2 tracking-wide text-sm"
                    >
                        Create Product
                    </button>

                </form>
            </div>
        </div>
    );
};

export default CreateProduct;