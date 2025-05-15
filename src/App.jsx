import { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import logo from '../images/logo.svg';
import avatar from '../images/image-avatar.png';
import productImg1 from '../images/image-product-1.jpg';
import productImg2 from '../images/image-product-2.jpg';
import productImg3 from '../images/image-product-3.jpg';
import productImg4 from '../images/image-product-4.jpg';



function App() {
  const [selectedImage, setSelectedImage] = useState(productImg1);
  return (
    <div className='w-[1115px] mx-auto' role="main">
      <div className=" flex items-center py-5 border-b border-gray-300 pb-[50px] relative">
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

        <div className="flex items-center gap-6 ml-auto relative">
          {/* Cart icon & popup */}
          <div className="relative cursor-pointer group">
            <FiShoppingCart className="w-6 h-6 text-[var(--Dark-grayish-blue)]" />

            {/* Popup Cart Window */}
            <div className="absolute left-1/2 top-10 w-[360px] h-[260px] bg-white shadow-lg rounded-lg border border-gray-200 text-sm text-gray-600 hidden group-hover:block -translate-x-1/2">
              {/* Cart header section */}
              <div className="h-[68px] flex items-center px-6">
                <p className="font-bold text-black">Cart</p>
              </div>

              {/* Divider line */}
              <div className="border-b border-gray-300" />

              {/* Empty cart message in remaining space */}
              <div className="flex items-center justify-center h-[192px]">
                <p className="text-[var(--Dark-grayish-blue)] font-extrabold">Your cart is empty.</p>
              </div>
            </div>
          </div>

          {/* Avatar (not part of group) */}
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent hover:border-orange-500 transition-colors duration-300 cursor-pointer">
            <img src={avatar} alt="User Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="product flex gap-10 mt-10 p-8">
        {/* Left side: Product Images */}
        <div className="w-1/2">
          {/* Big product image */}
          <div className="w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden mb-6">
            <img src={selectedImage} alt="Product" className="w-full h-full object-cover" />
          </div>

          {/* Thumbnail images */}
          <div className="grid grid-cols-4 gap-4">
            {[productImg1, productImg2, productImg3, productImg4].map((img, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden border cursor-pointer 
                  ${selectedImage === img ? 'border-[var(--Orange)] border-2' : 'border-gray-200 border-2'} 
                  hover:border-[var(--Orange)] border-2`}
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-full h-full object-cover aspect-square 
                ${selectedImage === img ? 'opacity-25' : 'opacity-100'}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Product Info */}
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-4">Product Title</h1>
          <p className="text-gray-600 mb-6">This is a short product description. Details about the product go here.</p>
          <div className="text-2xl font-semibold mb-4">$125.00</div>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">Add to Cart</button>
        </div>
      </div>

    </div>
  )
}

export default App;
