import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { asyncUpdateUser } from './../store/actions/userActions';

const Products = () => {
  const product = useSelector((state) => state.productReducer.products);
  const users = useSelector((state) => state.userReducer.users);

  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    const copyUser = { ...users, cart: [...users.cart] };
    const x = copyUser.cart.findIndex((c) => c?.product?.id == product.id);
    if (x == -1) {
      copyUser.cart.push({ product, quantity: 1 });
    } else {
      copyUser.cart[x] = { product, quantity: copyUser.cart[x].quantity + 1 };
    }
    dispatch(asyncUpdateUser(users.id, copyUser));
  };

  const renderProduct = product.map((product) => {
    return (
      <div
        key={product.id}
        className="w-full bg-[#16213E] border border-[#0F3460] rounded-2xl overflow-hidden shadow-lg hover:shadow-[#E94560]/20 hover:-translate-y-1 transition-all duration-300 flex flex-col"
      >
        {/* Image */}
        <div className="bg-white/5 h-48 sm:h-52 flex items-center justify-center p-4">
          <img
            className="h-full w-full object-contain"
            src={product.image}
            alt="product_Image"
          />
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-4 gap-2">
          <h1 className="font-bold text-[#EAEAEA] text-sm sm:text-base leading-snug line-clamp-2">
            {product.title}
          </h1>

          <p className="text-[#8892A4] text-xs sm:text-sm leading-relaxed flex-1">
            {product.description.slice(0, 100)}....
            <span className="text-[#E94560] font-semibold cursor-pointer hover:underline ml-1">
              More
            </span>
          </p>

          {/* Footer */}
          <div className="mt-3 flex justify-between items-center border-t border-[#0F3460] pt-3">
            <span className="text-[#F5A623] font-bold text-sm sm:text-base">
              ${product.price}
            </span>

            <button
              onClick={() => addToCartHandler(product)}
              className="bg-[#E94560] hover:bg-[#FF6B6B] active:scale-90 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-200"
            >
              + Add to Cart
            </button>
          </div>

          <Link
            to={`/product/${product.id}`}
            className="text-[#8892A4] hover:text-[#E94560] text-xs sm:text-sm mt-1 transition-colors duration-200 inline-flex items-center gap-1"
          >
            View details →
          </Link>
        </div>
      </div>
    );
  });

  return product.length > 0 ? (
    <div className="w-full pt-6 px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {renderProduct}
    </div>
  ) : (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="text-center space-y-3">
        <div className="w-12 h-12 border-4 border-[#E94560] border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-[#8892A4] text-lg tracking-widest uppercase">
          Loading Products...
        </p>
      </div>
    </div>
  );
};

export default Products;