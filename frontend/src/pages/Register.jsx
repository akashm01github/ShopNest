import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegister } from '../store/actions/userActions';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerHandeler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    user.cart = [];
    console.log(user);
    dispatch(asyncRegister(user));
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#1A1A2E] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#16213E] border border-[#0F3460] rounded-2xl p-8 shadow-xl">

        <h2 className="text-[#EAEAEA] text-2xl font-bold mb-1 tracking-wide">Create Account</h2>
        <p className="text-[#8892A4] text-sm mb-8">Join us today — it's free</p>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit(registerHandeler)}>

          {/* Username */}
          <div className="flex flex-col gap-1">
            <input
              {...register("username", { required: true })}
              className="bg-[#1A1A2E] border border-[#0F3460] focus:border-[#E94560] outline-none text-[#EAEAEA] placeholder-[#8892A4] rounded-xl px-4 py-3 text-sm transition-colors duration-200"
              type="text"
              placeholder="Username"
            />
            {errors.username && (
              <span className="text-[#E94560] text-xs pl-1">Username is required</span>
            )}
          </div>

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
            Register
          </button>

          <p className="text-[#8892A4] text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-[#E94560] font-semibold hover:text-[#FF6B6B] transition-colors">
              Log In
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Register;