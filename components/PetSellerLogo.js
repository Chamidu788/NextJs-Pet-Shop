// components/PetSellerLogo.js
const PetSellerLogo = ({ className }) => {
    return (
      <div className={`flex items-center justify-center ${className} space-x-10 md:flex hidden`}>
        {/* Logo Images */}
        <img src="/seller/1.png" alt="Pet Seller Logo 1" className="h-12 w-12 md:h-16 md:w-16" />
        <img src="/seller/2.png" alt="Pet Seller Logo 2" className="h-12 w-12 md:h-16 md:w-16" />
        <img src="/seller/3.png" alt="Pet Seller Logo 3" className="h-12 w-12 md:h-16 md:w-16" />
        <img src="/seller/4.png" alt="Pet Seller Logo 4" className="h-12 w-12 md:h-16 md:w-16" />
        <img src="/seller/5.png" alt="Pet Seller Logo 5" className="h-12 w-12 md:h-16 md:w-16" />
        <img src="/seller/6.png" alt="Pet Seller Logo 6" className="h-12 w-12 md:h-16 md:w-16" />
        <img src="/seller/7.png" alt="Pet Seller Logo 7" className="h-12 w-12 md:h-16 md:w-16" />
      </div>
    );
  };
  
  export default PetSellerLogo;