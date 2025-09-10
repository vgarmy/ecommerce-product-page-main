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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const images = [productImg1, productImg2, productImg3, productImg4];
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const currentSrc = images[activeIndex];

  const productPrice = 125.0;

  return (
    <div className="max-w-[1115px] w-full lg:px-4 mx-auto" role="main">
      <div className="flex items-center justify-between lg:px-0 px-3 py-5 lg:border-b lg:border-gray-300 lg:pb-[50px] relative flex-wrap">
        <div className="lg:hidden flex items-center h-[40px] order-1 mr-4">
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-[var(--Dark-grayish-blue)]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className={`fixed inset-0 z-50 transition-all duration-300 ${isMobileMenuOpen ? 'bg-black bg-opacity-50' : 'pointer-events-none'}`}>
          <div className={`fixed top-0 left-0 h-full bg-white w-[75%] p-6 shadow-lg transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 left-4 text-[var(--Dark-grayish-blue)]" aria-label="Close menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="mt-12 space-y-6 text-[var(--Dark-grayish-blue)] text-lg font-medium">
              {["Collections", "Men", "Women", "About", "Contact"].map((item) => (
                <div key={item} className="cursor-pointer hover:text-black">{item}</div>
              ))}
            </nav>
          </div>
        </div>
        <div className="logo flex items-center h-[40px] order-2 lg:order-1">
          <img src={logo} alt="Logo" className="h-6" />
        </div>
        <div className="hidden lg:flex items-center h-[40px] gap-5 text-sm font-medium text-[var(--Dark-grayish-blue)] ml-[46px] relative order-3">
          {["Collections", "Men", "Women", "About", "Contact"].map((item) => (
            <div key={item} className="group relative">
              <span className="cursor-pointer hover:text-black">{item}</span>
              <div className="absolute bottom-[-60px] left-0 w-full h-[3px] bg-[var(--Orange)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6 ml-auto h-[40px] order-4">
          <div className="relative flex items-center" onMouseEnter={() => setIsCartOpen(true)} onMouseLeave={() => setIsCartOpen(false)}>
            <div className="relative cursor-pointer">
              <FiShoppingCart className="w-6 h-6 text-[var(--Dark-grayish-blue)]" />
              {cartCount > 0 && (
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartCount}
                </div>
              )}
            </div>
            <div className="absolute left-1/2 top-6 w-[360px] h-4 -translate-x-1/2" />
            {isCartOpen && (
              <div className="fixed md:absolute left-1/2 -translate-x-1/2 top-22 md:top-10 w-[360px] bg-white shadow-lg rounded-lg border border-gray-200 text-sm text-gray-600 z-50">
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
                      <button onClick={() => setCartCount(0)} className="cursor-pointer text-gray-400 hover:text-orange-500 transition" aria-label="Remove from cart">
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
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent hover:border-orange-500 transition-colors duration-300 cursor-pointer">
            <img src={avatar} alt="User Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="product flex flex-col lg:flex-row gap-10 lg:mt-10 lg:p-8 md:px-3 sm:px-0">
        <div className="w-full lg:w-1/2">
          <div className="w-full h-[300px] lg:h-[500px] bg-gray-100 rounded-none lg:rounded-lg overflow-hidden mb-6 relative">
            <img
              src={currentSrc}
              alt="Product"
              className="w-full h-full object-cover cursor-pointer z-0 select-none pointer-events-none md:pointer-events-auto"
              onClick={() => {
                setOverlayOpen(true);
                // overlay kan läsa samma activeIndex för att öppna på rätt bild
              }}
            />

            {/* Prev */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
              }}
              className="lg:hidden absolute top-1/2 left-2 -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center shadow hover:text-orange-500 z-20 touch-manipulation"
              aria-label="Föregående bild"
            >
              <FiChevronLeft />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
              }}
              className="lg:hidden absolute top-1/2 right-2 -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center shadow hover:text-orange-500 z-20 touch-manipulation"
              aria-label="Nästa bild"
            >
              <FiChevronRight />
            </button>
          </div>

          <div className="hidden lg:grid grid-cols-4 gap-4">
            {images.map((img, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-lg overflow-hidden border-2 cursor-pointer focus:outline-none
          ${isActive ? 'border-[var(--Orange)]' : 'border-gray-200'}
          hover:border-[var(--Orange)] focus-visible:ring-2 focus-visible:ring-[var(--Orange)]`}
                  aria-label={`Välj bild ${index + 1}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-full aspect-square object-cover ${isActive ? 'opacity-25' : 'opacity-100'}`}
                    draggable={false}
                  />
                </button>
              );
            })}
          </div>

        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-3 md:px-0 px-7">
          <h1 className="text-[var(--Dark-grayish-blue)] text-sm font-bold uppercase tracking-widest mb-3">Sneaker Company</h1>
          <h2 className="text-5xl font-bold mb-4">Fall Limited Edition Sneakers</h2>
          <p className="text-[var(--Dark-grayish-blue)] mb-6">
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
          <div className="w-full mb-6">
            <div className="flex items-center justify-between gap-4 md:flex-col md:items-start">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold">${productPrice.toFixed(2)}</span>
                <span className="text-white font-bold bg-black px-2 py-1 rounded text-sm">50%</span>
              </div>
              <div className="text-gray-400 line-through text-sm mt-2">$250.00</div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 w-full max-w-[500px] mb-[25px]">
            <div className="flex items-center justify-between bg-gray-100 px-4 h-16 rounded-lg w-full lg:w-1/2">
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

            <button
              className="drop-shadow-xl cursor-pointer bg-orange-500 text-black font-semibold px-6 h-16 rounded-lg hover:bg-orange-600 transition flex items-center justify-center gap-3 w-full lg:flex-1"
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
          <div className="relative max-w-[600px] w-full">
            <button onClick={() => setOverlayOpen(false)} className="cursor-pointer absolute -top-14 right-0 text-white text-4xl hover:text-[var(--Orange)]">&times;</button>
            <div className="w-full h-[500px] relative">
              <img src={images[activeIndex]} alt="Zoomed" className="w-full h-full object-cover rounded-lg" />
              <button onClick={() => setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))} className="cursor-pointer absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:text-orange-500">
                <FiChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={() => setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))} className="cursor-pointer absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:text-orange-500">
                <FiChevronRight className="w-6 h-6" />
              </button>
            </div>
            <div className="hidden lg:grid grid-cols-4 gap-4 mt-6">
              {images.map((img, i) => (
                <div key={i} onClick={() => setActiveIndex(i)} className={`rounded-lg overflow-hidden border-2 cursor-pointer ${i === activeIndex ? 'border-orange-500' : 'border-transparent'} hover:border-orange-500`}>
                  <img src={img} alt={`Thumb ${i + 1}`} className={`w-full h-full object-cover aspect-square ${i === activeIndex ? 'opacity-25' : ''}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
