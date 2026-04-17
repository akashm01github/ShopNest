import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { asyncDeleteUser, asyncLogOutUser, asyncUpdateUser } from '../../store/actions/userActions';

const UserProfile = () => {
    const user = useSelector((state) => state.userReducer.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        defaultValues: {
            username: user?.username,
            email: user?.email,
            password: user?.password
        }
    });

    useEffect(() => {
        if (user) {
            reset({
                username: user.username,
                email: user.email,
                password: user.password
            });
        }
    }, [user]);

    const updateHandler = (userData) => {
        console.log(user);
        dispatch(asyncUpdateUser(user.id, userData));
    };

    const logoutHandeler = (user) => {
        dispatch(asyncLogOutUser(user));
        navigate('/');
    };

    const deleteHandeler = (id) => {
        dispatch(asyncDeleteUser(id));
        navigate('/login');
    };

    if (!user) return (
        <div className="min-h-screen bg-[#1A1A2E] flex items-center justify-center">
            <div className="text-center space-y-3">
                <div className="w-10 h-10 border-4 border-[#E94560] border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-[#8892A4] text-sm uppercase tracking-widest">Loading...</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#1A1A2E] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-[#16213E] border border-[#0F3460] rounded-2xl p-8 shadow-xl">

                {/* Avatar header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-full bg-[#E94560]/20 border-2 border-[#E94560] flex items-center justify-center text-[#E94560] text-2xl font-bold">
                        {user?.username?.[0]?.toUpperCase()}
                    </div>
                    <div>
                        <h2 className="text-[#EAEAEA] text-xl font-bold">{user?.username}</h2>
                        <p className="text-[#8892A4] text-xs">{user?.email}</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(updateHandler)} className="flex flex-col gap-5">

                    <div className="flex flex-col gap-1">
                        <label className="text-[#8892A4] text-xs uppercase tracking-widest pl-1">Username</label>
                        <input
                            {...register("username", { required: true })}
                            className="bg-[#1A1A2E] border border-[#0F3460] focus:border-[#E94560] outline-none text-[#EAEAEA] placeholder-[#8892A4] rounded-xl px-4 py-3 text-sm transition-colors duration-200"
                            type="text"
                            placeholder="Enter UserName"
                        />
                        {errors.username && <span className="text-[#E94560] text-xs pl-1">Username is required</span>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[#8892A4] text-xs uppercase tracking-widest pl-1">Email</label>
                        <input
                            {...register("email", { required: true })}
                            className="bg-[#1A1A2E] border border-[#0F3460] focus:border-[#E94560] outline-none text-[#EAEAEA] placeholder-[#8892A4] rounded-xl px-4 py-3 text-sm transition-colors duration-200"
                            type="text"
                            placeholder="Enter Email"
                        />
                        {errors.email && <span className="text-[#E94560] text-xs pl-1">Email is required</span>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[#8892A4] text-xs uppercase tracking-widest pl-1">Password</label>
                        <input
                            {...register("password", { required: true })}
                            className="bg-[#1A1A2E] border border-[#0F3460] focus:border-[#E94560] outline-none text-[#EAEAEA] placeholder-[#8892A4] rounded-xl px-4 py-3 text-sm transition-colors duration-200"
                            type="password"
                            placeholder="Enter Password"
                        />
                        {errors.password && <span className="text-[#E94560] text-xs pl-1">Password is required</span>}
                    </div>

                    <div className="flex gap-3 mt-2">
                        <button
                            type="submit"
                            className="flex-1 bg-[#E94560] hover:bg-[#FF6B6B] active:scale-95 text-white font-semibold py-2.5 rounded-xl transition-all duration-200 text-sm"
                        >
                            Update
                        </button>
                        <button
                            type="button"
                            onClick={() => logoutHandeler(user)}
                            className="flex-1 bg-[#0F3460] hover:bg-[#0F3460]/70 active:scale-95 text-[#EAEAEA] font-semibold py-2.5 rounded-xl transition-all duration-200 text-sm border border-[#0F3460]"
                        >
                            Log Out
                        </button>
                        <button
                            type="button"
                            onClick={() => deleteHandeler(user.id)}
                            className="px-4 bg-transparent hover:bg-red-900/30 active:scale-95 text-[#E94560] font-semibold py-2.5 rounded-xl transition-all duration-200 text-sm border border-[#E94560]/40"
                        >
                            Delete
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UserProfile;