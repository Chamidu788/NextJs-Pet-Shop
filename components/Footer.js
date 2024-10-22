const Footer = () => {
  return (
    <footer className="bg-[#F7DBA7] rounded-xl py-16">
      {/* Register Now Section */}
      <div className="bg-[#061E45] md:py-7 rounded-xl mx-[18px] py-7 md:mx-[200px]">
        <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center sm:space-x-4 text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-medium text-white mb-4 sm:mb-0">Register Now So You Don’t Miss 
            <br/>Our Programs</h3>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full sm:w-auto text-sm rounded-md focus:outline-none"
            />
            <button className="bg-white text-[#061E45] px-4 py-2 rounded-md text-sm font-medium">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Categories, Social Icons, and Logo */}
      <div className="container mx-auto py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          {/* Categories */}
          <ul className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6">
            <li><a href="#" className="text-[#061E45]">Home</a></li>
            <li><a href="#" className="text-[#061E45]">Category</a></li>
            <li><a href="#" className="text-[#061E45]">About</a></li>
            <li><a href="#" className="text-[#061E45]">Contact</a></li>
          </ul>

          {/* Logo */}
          <img src="logo.png" alt="Monitö Logo" className="h-8 mx-auto sm:mx-0" />

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-end space-x-4">
            <a href="#"><img src="/icons/f.png" alt="Facebook" className="h-6 w-6" /></a>
            <a href="#"><img src="/icons/t.png" alt="Twitter" className="h-6 w-6" /></a>
            <a href="#"><img src="/icons/i.png" alt="Instagram" className="h-6 w-6" /></a>
            <a href="#"><img src="/icons/y.png" alt="YouTube" className="h-6 w-6" /></a>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t border-gray-300 my-4" />

      {/* Privacy Details */}
      <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0">
        <div className="flex space-x-2">
          <a href="#" className="text-gray-600">Privacy Policy</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="text-gray-600">Terms of Service</a>
        </div>
        <p className="text-gray-600 text-center sm:text-left">© 2024 Monitö. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;