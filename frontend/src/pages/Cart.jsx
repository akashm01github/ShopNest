import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../store/actions/userActions";

const Cart = () => {
    const products = useSelector((state) => state.productReducer.products);
    const users = useSelector((state) => state.userReducer.users);

    const dispatch = useDispatch();

    const increaseQuantity = (index, product) => {
        const copyUser = { ...users, cart: [...users.cart] };
        copyUser.cart[index] = {
            ...copyUser.cart[index],
            quantity: copyUser.cart[index].quantity + 1
        };
        dispatch(asyncUpdateUser(users.id, copyUser));
    };

    const decreaseQuantity = (index, product) => {
        const copyUser = { ...users, cart: [...users.cart] };
        if (users.cart[index].quantity > 0) {
            copyUser.cart[index] = {
                ...copyUser.cart[index],
                quantity: copyUser.cart[index].quantity - 1
            };
        } else {
            copyUser.cart.splice(index, 1);
        }
        dispatch(asyncUpdateUser(users.id, copyUser));
    };

    const totalPrice = users?.cart.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );

    return (
        <div className="min-h-screen bg-[#1A1A2E] px-4 py-6 sm:px-6 lg:px-12">
            {/* Header */}
            <h1 className="text-[#EAEAEA] text-xl sm:text-2xl font-bold mb-6 sm:mb-8 tracking-wide">
                🛒 Your Cart
                <span className="ml-3 text-xs sm:text-sm text-[#8892A4] font-normal">
                    ({users?.cart.length} items)
                </span>
            </h1>

            {/* Empty Cart */}
            {users?.cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-[50vh] text-[#8892A4]">
                    <p className="text-4xl sm:text-5xl mb-4">🛍️</p>
                    <p className="text-sm sm:text-lg tracking-widest uppercase">
                        Your cart is empty
                    </p>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    {/* Cart Items */}
                    <ul className="flex flex-col gap-4">
                        {users?.cart.map((cartItem, index) => (
                            <li
                                key={cartItem.product.id}
                                className="flex flex-col sm:flex-row sm:items-center gap-4 bg-[#16213E] border border-[#0F3460] rounded-2xl p-4 shadow-md hover:shadow-[#E94560]/10 transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="w-full sm:w-20 h-40 sm:h-20 bg-white/5 rounded-xl flex items-center justify-center shrink-0 p-2">
                                    <img
                                        src={cartItem.product.image}
                                        className="w-full h-full object-contain"
                                        alt={cartItem.product.title}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col sm:flex-row sm:items-center w-full gap-3">
                                    
                                    {/* Title */}
                                    <p className="text-[#EAEAEA] text-sm font-medium flex-1 line-clamp-2 leading-snug">
                                        {cartItem.product.title}
                                    </p>

                                    {/* Price */}
                                    <span className="text-[#F5A623] font-bold text-sm">
                                        ${(cartItem.product.price * cartItem.quantity).toFixed(2)}
                                    </span>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => decreaseQuantity(index, cartItem)}
                                            className="w-8 h-8 rounded-lg bg-[#0F3460] text-[#EAEAEA] hover:bg-[#E94560] active:scale-90 transition-all duration-200 font-bold text-lg flex items-center justify-center"
                                        >
                                            −
                                        </button>

                                        <span className="text-[#EAEAEA] font-bold w-6 text-center">
                                            {cartItem.quantity}
                                        </span>

                                        <button
                                            onClick={() => increaseQuantity(index, cartItem)}
                                            className="w-8 h-8 rounded-lg bg-[#0F3460] text-[#EAEAEA] hover:bg-[#E94560] active:scale-90 transition-all duration-200 font-bold text-lg flex items-center justify-center"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Total Section */}
                    <div className="flex justify-center sm:justify-end mt-4">
                        <div className="w-full sm:w-auto bg-[#16213E] border border-[#0F3460] rounded-2xl px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                            
                            <span className="text-[#8892A4] text-sm uppercase tracking-widest">
                                Total
                            </span>

                            <span className="text-[#F5A623] text-2xl font-bold">
                                ${totalPrice?.toFixed(2)}
                            </span>

                            <button className="w-full sm:w-auto bg-[#E94560] hover:bg-[#FF6B6B] active:scale-90 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200">
                                Checkout
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;