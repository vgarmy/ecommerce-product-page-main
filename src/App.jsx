import { useState } from 'react';
import { FiShoppingCart, FiChevronLeft, FiChevronRight, FiTrash2 } from 'react-icons/fi';
import logo from '../images/logo.svg';
import avatar from '../images/image-avatar.png';
import productImg1 from '../images/image-product-1.jpg';
import productImg2 from '../images/image-product-2.jpg';
import productImg3 from '../images/image-product-3.jpg';
import productImg4 from '../images/image-product-4.jpg';



function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(productImg1);
  const images = [productImg1, productImg2, productImg3, productImg4];
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const productPrice = 125.00;
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
   <div
  className="relative"
  onMouseEnter={() => setIsCartOpen(true)}
  onMouseLeave={() => setIsCartOpen(false)}
>
  {/* Cart Icon with badge */}
  <div className="relative cursor-pointer">
    <FiShoppingCart className="w-6 h-6 text-[var(--Dark-grayish-blue)]" />
    {cartCount > 0 && (
      <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
        {cartCount}
      </div>
    )}
  </div>

  {/* Spacer to prevent hover gap (invisible bridge) */}
  <div className="absolute left-1/2 top-6 w-[360px] h-4 -translate-x-1/2" />

  {/* Popup */}
  {isCartOpen && (
    <div className="absolute left-1/2 top-10 w-[360px] bg-white shadow-lg rounded-lg border border-gray-200 text-sm text-gray-600 -translate-x-1/2 z-50">
      <div className="h-[68px] flex items-center px-6">
        <p className="font-bold text-black">Cart</p>
      </div>
      <div className="border-b border-gray-300" />

      {cartCount === 0 ? (
        <div className="flex items-center justify-center h-[192px]">
          <p className="text-[var(--Dark-grayish-blue)] font-extrabold">Your cart is empty.</p>
        </div>
      ) : (
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4">
            <img src={productImg1} alt="Product" className="w-12 h-12 rounded-lg" />
            <div className="flex-1">
              <p className="text-gray-600 text-sm">Fall Limited Edition Sneakers</p>
              <p className="text-sm">
                ${productPrice.toFixed(2)} × {cartCount}
                <span className="font-bold text-black ml-1">
                  ${(productPrice * cartCount).toFixed(2)}
                </span>
              </p>
            </div>
            <button
              onClick={() => {setCartCount(0)}}
              className="cursor-pointer text-gray-400 hover:text-orange-500 transition"
              aria-label="Remove from cart"
            >
              <FiTrash2 className="w-5 h-5" />
            </button>
          </div>

          <button className="cursor-pointer w-full bg-orange-500 text-white text-sm py-3 rounded-lg hover:bg-orange-600 transition">
            Checkout
          </button>
        </div>
      )}
    </div>
  )}
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
            <img
              src={selectedImage}
              alt="Product"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => {
                setOverlayOpen(true);
                setActiveIndex(images.indexOf(selectedImage));
              }}
            />
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
        <div className="w-1/2 flex flex-col justify-center gap-3">
          <h1 className="text-[var(--Dark-grayish-blue)] text-sm font-bold uppercase tracking-widest mb-3">Sneaker Company</h1>
          <h2 className="text-5xl font-bold mb-4">Fall Limited Edition Sneakers</h2>
          <p className="text-[var(--Dark-grayish-blue)] mb-6">
            These low-profile sneakers are your perfect casual wear companion. Featuring a
            durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>

          {/* Pricing section */}
          <div className="w-full mb-6">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold">$125.00</span>
              <span className="text-white font-bold bg-black px-2 py-1 rounded text-sm">50%</span>
            </div>
            <div className="text-gray-400 line-through text-sm mt-2">$250.00</div>
          </div>

          <div className="flex items-center gap-4 w-full max-w-[500px]">
            {/* Counter section */}
            <div className="flex items-center justify-between bg-gray-100 px-4 h-16 rounded-lg w-50">
              <button
                onClick={() => setQuantity((prev) => Math.max(0, prev - 1))}
                className="cursor-pointer text-orange-500 text-2xl font-bold hover:text-orange-600"
              >
                −
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="cursor-pointer text-orange-500 text-2xl font-bold hover:text-orange-600"
              >
                +
              </button>
            </div>

            {/* Add to Cart button */}
            <button
              className="cursor-pointer flex-1 bg-orange-500 text-black font-semibold px-6 h-16 rounded-lg hover:bg-orange-600 transition flex items-center justify-center gap-3"
              onClick={() => {
                if (quantity > 0) {
                  setCartCount(quantity);
                  setQuantity(0);
                }
              }}
            >
              <FiShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>

      {overlayOpen && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
          {/* Main image container */}
          <div className="relative max-w-[600px] w-full">

            {/* Close button - above the image top-right */}
            <button
              onClick={() => setOverlayOpen(false)}
              className="cursor-pointer absolute -top-14 right-0 text-white text-4xl hover:text-[var(--Orange)]"
            >
              &times;
            </button>

            {/* Image with navigation arrows overlapping */}
            <div className="w-full h-[500px] relative">
              <img
                src={images[activeIndex]}
                alt="Zoomed"
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Left nav circle */}
              <button
                onClick={() =>
                  setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
                }
                className="cursor-pointer absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 
             bg-white text-black w-12 h-12 rounded-full flex items-center justify-center 
             shadow-lg hover:text-orange-500"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>

              {/* Right nav circle */}
              <button
                onClick={() =>
                  setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
                }
                className="cursor-pointer absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 
             bg-white text-black w-12 h-12 rounded-full flex items-center justify-center 
             shadow-lg hover:text-orange-500"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              {images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-lg overflow-hidden border-2 cursor-pointer
              ${i === activeIndex ? 'border-orange-500' : 'border-transparent'}
              hover:border-orange-500`}
                >
                  <img
                    src={img}
                    alt={`Thumb ${i + 1}`}
                    className={`w-full h-full object-cover aspect-square ${i === activeIndex ? 'opacity-25' : ''
                      }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}


    </div>
  )
}

export default App;
