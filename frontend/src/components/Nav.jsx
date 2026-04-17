import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLogOutUser } from '../store/actions/userActions';

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userReducer.users);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(asyncLogOutUser());
    navigate('/login');
    setMenuOpen(false);
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? 'relative px-3 py-1.5 rounded-md text-sm font-medium text-[#EAEAEA] bg-[#0F3460]/50 after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-[#E94560] transition-all duration-200'
      : 'relative px-3 py-1.5 rounded-md text-sm font-medium text-[#8892A4] hover:text-[#EAEAEA] hover:bg-[#0F3460]/50 transition-all duration-200 group';

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? 'block w-full px-4 py-3 text-sm font-medium text-[#EAEAEA] bg-[#0F3460]/60 border-l-2 border-[#E94560] rounded-r-md'
      : 'block w-full px-4 py-3 text-sm font-medium text-[#8892A4] hover:text-[#EAEAEA] hover:bg-[#0F3460]/40 hover:border-l-2 hover:border-[#E94560]/50 rounded-r-md transition-all duration-200';

  return (
    <>
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <nav
        className="relative w-full bg-[#16213E] border-b border-[#0F3460] shadow-[0_4px_24px_rgba(0,0,0,0.4)] mb-10"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Left accent gradient bar */}
        <div className="absolute left-0 top-0 bottom-0 w-0.75 bg-linear-to-b from-[#E94560] to-[#F5A623]" />

        <div className="flex items-center justify-between px-6 md:px-10 h-16">

          {/* Brand */}
          <NavLink
            to="/"
            className="flex items-center gap-2 font-bold text-lg text-[#EAEAEA] no-underline tracking-tight"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E94560] animate-pulse" />
            ShopNest
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={linkClass}>Home</NavLink>

            {user ? (
              <>
                {user.isAdmin && (
                  <NavLink to="/admin/create-product" className={linkClass}>
                    Create Product
                    <span className="ml-1.5 inline-block text-[0.6rem] font-bold uppercase tracking-widest bg-[#E94560]/15 text-[#E94560] border border-[#E94560]/30 rounded px-1 py-px align-middle">
                      Admin
                    </span>
                  </NavLink>
                )}
                <NavLink to="/admin/userProfile" className={linkClass}>Profile</NavLink>
                <NavLink to="/cart" className={linkClass}>Cart</NavLink>

                <div className="w-px h-5 bg-[#0F3460] mx-2" />

                <button
                  onClick={handleLogout}
                  className="px-4 py-1.5 text-sm font-medium text-[#8892A4] border border-[#0F3460] rounded-lg hover:bg-[#E94560]/08 hover:text-[#FF6B6B] hover:border-[#E94560]/30 transition-all duration-200 cursor-pointer"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <div className="w-px h-5 bg-[#0F3460] mx-2" />
                <NavLink
                  to="/login"
                  className="px-4 py-1.5 text-sm font-semibold text-white bg-[#E94560] rounded-lg shadow-[0_2px_12px_rgba(233,69,96,0.3)] hover:bg-[#FF6B6B] hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(233,69,96,0.45)] transition-all duration-200 no-underline"
                >
                  Sign In
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 rounded-lg hover:bg-[#0F3460]/50 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 bg-[#EAEAEA] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#EAEAEA] rounded transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#EAEAEA] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 px-4 pb-4 pt-2 border-t border-[#0F3460]/60">
            <NavLink to="/" className={mobileLinkClass} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>

            {user ? (
              <>
                {user.isAdmin && (
                  <NavLink
                    to="/admin/create-product"
                    className={mobileLinkClass}
                    onClick={() => setMenuOpen(false)}
                  >
                    Create Product
                    <span className="ml-2 text-[0.6rem] font-bold uppercase tracking-widest bg-[#E94560]/15 text-[#E94560] border border-[#E94560]/30 rounded px-1 py-px">
                      Admin
                    </span>
                  </NavLink>
                )}
                <NavLink
                  to="/admin/userProfile"
                  className={mobileLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Profile
                </NavLink>
                <NavLink
                  to="/cart"
                  className={mobileLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Cart
                </NavLink>

                <div className="h-px w-full bg-[#0F3460] my-1" />

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-[#8892A4] hover:text-[#FF6B6B] hover:bg-[#E94560]/08 rounded-md transition-all duration-200 cursor-pointer"
                >
                  Log Out
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                className="mt-1 block w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-[#E94560] rounded-lg shadow-[0_2px_12px_rgba(233,69,96,0.3)] hover:bg-[#FF6B6B] transition-all duration-200 no-underline"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;