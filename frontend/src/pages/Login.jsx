import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { asyncLoginUser } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const loginHandeler = (user) => {
    user.id = nanoid();
    console.log(user);
    dispatch(asyncLoginUser(user));
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#1A1A2E] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#16213E] border border-[#0F3460] rounded-2xl p-8 shadow-xl">

        <h2 className="text-[#EAEAEA] text-2xl font-bold mb-1 tracking-wide">Welcome Back</h2>
        <p className="text-[#8892A4] text-sm mb-8">Sign in to your account</p>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit(loginHandeler)}>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <input
              {...register("email", { required: true })}
              className="bg-[#1A1A2E] border border-[#0F3460] focus:border-[#E94560] outline-none text-[#EAEAEA] placeholder-[#8892A4] rounded-xl px-4 py-3 text-sm transition-colors duration-200"
              type="text"
              placeholder="Email address"
            />
            {errors.email && (
              <span className="text-[#E94560] text-xs pl-1">Email is required</span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <input
              {...register("password", { required: true })}
              className="bg-[#1A1A2E] border border-[#0F3460] focus:border-[#E94560] outline-none text-[#EAEAEA] placeholder-[#8892A4] rounded-xl px-4 py-3 text-sm transition-colors duration-200"
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-[#E94560] text-xs pl-1">Password is required</span>
            )}
          </div>

          <button
            className="bg-[#E94560] hover:bg-[#FF6B6B] active:scale-95 text-white font-semibold py-3 rounded-xl transition-all duration-200 mt-2 tracking-wide"
          >
            Login
          </button>

          <p className="text-[#8892A4] text-sm text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#E94560] font-semibold hover:text-[#FF6B6B] transition-colors">
              Register
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;