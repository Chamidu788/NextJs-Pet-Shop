import { useState, useEffect } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setIsVisible(false);
    } else if (window.scrollY <= 100) {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`fixed w-full bg-transparent top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:justify-start md:space-x-10">
          
          {/* Mobile Menu Button (Left Side Now) */}
          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <FaBars className="h-7 w-7 text-gray-800" />
            </button>
          </div>
          
          {/* Logo */}
          <div className="flex justify-center flex-grow md:justify-start">
            <img className="h-10 w-auto" src="/logo.png" alt="Monito Logo" />
          </div>

          {/* Mobile Search Icon (Right Side Now) */}
          <div className="flex md:hidden">
            <FaSearch className="h-7 w-7 text-gray-800" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-gray-800 hover:text-black font-bold">Home</a>
            <a href="/category" className="text-gray-800 hover:text-black font-bold">Category</a>
            <a href="/about" className="text-gray-800 hover:text-black font-bold">About</a>
            <a href="/contact" className="text-gray-800 hover:text-black font-bold">Contact</a>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search something here!"
              className="border rounded-full py-1 px-4"
            />
            <FaSearch className="text-gray-800" />
          </div>

          {/* Join Button & Language Selector (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-sky-950 text-white py-1 px-4 rounded-full">
              Join the community
            </button>
            <div className="text-gray-800">VND</div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <a href="/" className="block px-4 py-2 text-gray-800">Home</a>
          <a href="/category" className="block px-4 py-2 text-gray-800">Category</a>
          <a href="/about" className="block px-4 py-2 text-gray-800">About</a>
          <a href="/contact" className="block px-4 py-2 text-gray-800">Contact</a>
        </div>
      )}
    </nav>
  );
}