import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { asyncDeleteProduct, asyncUpdateProduct } from '../../store/actions/productActions';

const ProductInfo = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = useSelector((state) => state.productReducer.products);
    const users = useSelector((state) => state.userReducer.users);

    const product = products?.find((product) => product.id == id);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            image: product?.image,
            title: product?.title,
            price: product?.price,
            category: product?.category,
            description: product?.description
        }
    });

    useEffect(() => {
        if (product) {
            reset({
                image: product.image,
                title: product.title,
                price: product.price,
                category: product.category,
                description: product.description,
            });
        }
    }, [product]);

    const updateHandler = (product) => {
        dispatch(asyncUpdateProduct(id, product));
    };

    const deleteHandeler = (id) => {
        dispatch(asyncDeleteProduct(id));
        navigate('/');
    };

    if (!product) return (
        <div className="min-h-screen bg-[#1A1A2E] flex items-center justify-center">
            <div className="text-center space-y-3">
                <div className="w-10 h-10 border-4 border-[#E94560] border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-[#8892A4] text-sm uppercase tracking-widest">Loading...</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#1A1A2E] py-10 px-4">

            {/* Product Detail Card */}
            <div className="flex flex-col md:flex-row gap-8 bg-[#16213E] border border-[#0F3460] rounded-2xl overflow-hidden mb-10 shadow-xl">
                <div className="md:w-1/2 bg-white/5 flex items-center justify-center p-8 min-h-[320px]">
                    <img
                        className="max-h-[320px] w-full object-contain"
                        src={product?.image}
                        alt={product?.title}
                    />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <span className="text-[#8892A4] text-xs uppercase tracking-widest mb-2">{product.category}</span>
                    <h1 className="text-[#EAEAEA] text-2xl font-bold leading-snug mb-4">{product.title}</h1>
                    <p className="text-[#F5A623] text-4xl font-bold mb-4">${product.price}</p>
                    <p className="text-[#8892A4] text-sm leading-relaxed mb-8">{product.description}</p>
                    <button className="w-fit bg-[#E94560] hover:bg-[#FF6B6B] active:scale-95 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-200 text-sm">
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Admin Panel */}
            {users && users?.isAdmin && (
                <div className="bg-[#16213E] border border-[#0F3460] rounded-2xl p-8 shadow-xl">
                    <h3 className="text-[#EAEAEA] font-bold text-lg mb-1">Admin — Edit Product</h3>
                    <p className="text-[#8892A4] text-xs mb-6 uppercase tracking-widest">Changes will update immediately</p>

                    <form onSubmit={handleSubmit(updateHandler)} className="flex flex-col gap-5 max-w-lg">

                        {[
                            { name: "title", label: "Product Title", type: "text", placeholder: "Enter Product Title" },
                            { name: "image", label: "Image URL", type: "url", placeholder: "Enter Image URL" },
                            { name: "price", label: "Price", type: "text", placeholder: "Enter Price" },
                            { name: "category", label: "Category", type: "text", placeholder: "Enter Category" },
                        ].map(({ name, label, type, placeholder }) => (
                            <div key={name} className="flex flex-col gap-1">
                                <label className="text-[#8892A4] text-xs uppercase tracking-widest pl-1">{label}</label>
                                <input
                                    {...register(name, { required: true })}
                                    className="bg-[#1A1A2E] border border-[#0F3460] focus:border-[#E94560] outline-none text-[#EAEAEA] placeholder-[#8892A4] rounded-xl px-4 py-3 text-sm transition-colors duration-200"
                                    type={type}
                                    placeholder={placeholder}
                                />
                            </div>
                        ))}

                        <div className="flex flex-col gap-1">
                            <label className="text-[#8892A4] text-xs uppercase tracking-widest pl-1">Description</label>
                            <textarea
                                {...register("description", { required: true })}
                                className="bg-[#1A1A2E] border border-[#0F3460] focus:border-[#E94560] outline-none text-[#EAEAEA] placeholder-[#8892A4] rounded-xl px-4 py-3 text-sm transition-colors duration-200 h-24 resize-none"
                                placeholder="Enter Description"
                            />
                        </div>

                        <div className="flex gap-3 mt-2">
                            <button
                                type="submit"
                                className="flex-1 bg-[#E94560] hover:bg-[#FF6B6B] active:scale-95 text-white font-semibold py-2.5 rounded-xl transition-all duration-200 text-sm"
                            >
                                Update Product
                            </button>
                            <button
                                type="button"
                                onClick={() => deleteHandeler(id)}
                                className="px-5 bg-transparent hover:bg-red-900/30 active:scale-95 text-[#E94560] font-semibold py-2.5 rounded-xl transition-all duration-200 text-sm border border-[#E94560]/40"
                            >
                                Delete
                            </button>
                        </div>

                    </form>
                </div>
            )}
        </div>
    );
};

export default ProductInfo;