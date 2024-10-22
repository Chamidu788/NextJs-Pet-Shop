import Navbar from '../components/Navbar';
import Banner2 from '../components/Banner2';
import ProductCard from '../components/ProductCard';
import NewProduct from '../components/NewProduct';
import Footer from '../components/Footer';
import PetSellerLogo from '../components/PetSellerLogo';
import PetCards from '../components/PetCards';
import Banner from '../components/Banner';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CustomBanner from '../components/CustomBanner';

export default function Home() {
  const [pets, setPets] = useState([]);
  const [products, setProducts] = useState([]); // For products

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('https://monitor-backend-rust.vercel.app/api/pets');
        setPets(response.data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://monitor-backend-rust.vercel.app/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchPets();
    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      <Navbar />
      <CustomBanner />

      {/* Pets Section */}
      <div className="py-14 sm:py-8 px-4 sm:px-8 md:px-10">
  <h2 className="text-sm font-bold text-gray-800 mb-1">What's new?</h2>
  
  {/* Take A Look Text (Always Visible) */}
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-md font-bold text-gray-800">Take A Look At Some Of Our Pets</h2>
    
    {/* Desktop View: Button */}
    <button className="hidden sm:block rounded-full border-2 border-sky-950 text-sky-950 bg-white px-4 py-2 text-xs md:px-6 md:text-base hover:bg-sky-950 hover:text-white transition duration-300">
      View More
    </button>
  </div>

  {/* Pet Cards Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
    {pets.map((pet) => (
      <ProductCard key={pet.id} pet={pet} />
    ))}
  </div>

  {/* Mobile View: Full-width Button */}
  <div className="sm:hidden mt-4">
    <button className="w-full rounded-full border-2 border-sky-950 text-sky-950 bg-white px-4 py-2 text-xs hover:bg-sky-950 hover:text-white transition duration-300">
      View More
    </button>
  </div>
</div>

      {/* Banner between Pets and Products */}
      <Banner2 />

  {/* Products Section */}
<div className="py-14 px-4 md:px-16 lg:px-28">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-lg font-bold text-gray-800">Our Products</h2>
    <button className="hidden md:block rounded-full border-2 border-sky-950 text-sky-950 bg-white px-4 py-2 text-sm md:px-6 md:text-base hover:bg-sky-950 hover:text-white transition duration-300">
      View More
    </button>
  </div>
  
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product) => (
      <NewProduct key={product.id} product={product} />
    ))}
  </div>
  
  {/* View More Button for Mobile */}
  <div className="md:hidden flex justify-center mt-6">
    <button className="rounded-full w-full border-2 border-sky-950 text-sky-950 bg-white px-4 py-2 text-sm md:px-6 md:text-base hover:bg-sky-950 hover:text-white transition duration-300">
      View More
    </button>
  </div>
</div>

<div className="flex justify-between md:px-16 lg:px-28 items-center w-full mb-6"> 
  <div className="flex flex-col md:flex-row items-center">
    <h2 className="text-sm hidden md:block md:text-lg font-semibold mr-2">Proud to be part of</h2>
    <h2 className="text-md hidden md:block md:text-xl font-bold">Pet Seller</h2>
  </div>
  {/* Button styled like product section */}
  <button className=" items-center hidden md:block justify-center bg-white border-2 border-sky-950 text-sky-950 px-4 py-2 rounded-full text-sm md:px-6 md:text-base hover:bg-sky-950 hover:text-white transition duration-300">
    View All Our Sellers
  </button>
</div>

      {/* Pet Seller Logos Section */}
      <div className="flex flex-wrap justify-center overflow-x-auto py-2 space-x-6"> 
        <PetSellerLogo />
      </div>
      <Banner/>
      {/* Pets Section */}
      <div className="py-14 sm:py-8 px-4 sm:px-8 md:px-10">
  <h2 className="text-sm font-bold text-gray-800 mb-1">You already Know?</h2>
  
  {/* Take A Look Text (Always Visible) */}
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-md font-bold text-gray-800">Useful pet Knowledge</h2>
    
    {/* Desktop View: Button */}
    <button className="hidden sm:block rounded-full border-2 border-sky-950 text-sky-950 bg-white px-4 py-2 text-xs md:px-6 md:text-base hover:bg-sky-950 hover:text-white transition duration-300">
      View More
    </button>
  </div>

  <PetCards />

  {/* Mobile View: Full-width Button */}
  <div className="sm:hidden mt-4">
    <button className="w-full rounded-full border-2 border-sky-950 text-sky-950 bg-white px-4 py-2 text-xs hover:bg-sky-950 hover:text-white transition duration-300">
      View More
    </button>
  </div>
</div>
      
     
      <Footer />
    </div>
  );
}