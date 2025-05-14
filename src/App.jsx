import { useState } from 'react'
import './App.css'
import logo from '../images/logo.svg';
import avatar from '../images/image-avatar.png';
import { FiShoppingCart } from 'react-icons/fi';


function App() {
  return (
    <>
      <div className="w-[1115px] mx-auto flex items-center py-5 border-b border-gray-300 pb-[50px] relative">
        <div className="logo">
          <img src={logo} alt="Logo" className="h-6" />
        </div>

        <div className="flex gap-5 text-sm font-medium text-[var(--Dark-grayish-blue)] ml-[46px] relative">
          <div className="group relative">
            <span className="cursor-pointer hover:text-black">Collections</span>
            <div className="absolute bottom-[-60px] left-0 w-full h-[3px] bg-[var(--Orange)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          </div>
          <div className="group relative">
            <span className="cursor-pointer hover:text-black">Men</span>
            <div className="absolute bottom-[-60px] left-0 w-full h-[3px] bg-[var(--Orange)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          </div>
          <div className="group relative">
            <span className="cursor-pointer hover:text-black">Women</span>
            <div className="absolute bottom-[-60px] left-0 w-full h-[3px] bg-[var(--Orange)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          </div>
          <div className="group relative">
            <span className="cursor-pointer hover:text-black">About</span>
            <div className="absolute bottom-[-60px] left-0 w-full h-[3px] bg-[var(--Orange)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          </div>
          <div className="group relative">
            <span className="cursor-pointer hover:text-black">Contact</span>
            <div className="absolute bottom-[-60px] left-0 w-full h-[3px] bg-[var(--Orange)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          </div>
        </div>

        <div className="flex items-center gap-6 ml-auto">
          <FiShoppingCart className="w-6 h-6 text-[var(--Dark-grayish-blue)] cursor-pointer" />
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent hover:border-orange-500 transition-colors duration-300 cursor-pointer">
            <img src={avatar} alt="User Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
