import { FaPlay } from 'react-icons/fa';

export default function Banner() {
  return (
    <div className="hidden lg:flex relative mx-auto max-w-7xl flex-col-reverse md:flex-row items-center justify-start px-10 h-auto md:h-[300px] bg-yellow-50 overflow-hidden rounded-3xl border-4 border-white">
      {/* Background Rectangles */}
      <div className="absolute w-[700px] h-[700px] sm:w-[200px] sm:h-[200px] md:w-[1500px] md:h-[1500px] bg-[#FFB775] top-[-5%] left-[-5%] sm:top-[0%] sm:left-[0%] md:top-[0%] md:left-[0%] rounded-3xl z-0"></div>
      <div className="absolute w-[450px] h-[450px] sm:w-[250px] sm:h-[250px] md:w-[650px] md:h-[650px] bg-[#FCEED5] rotate-[45deg] top-[80%] left-[-10%] sm:top-[50%] sm:left-[50%] md:top-[-60%] md:left-[-11%] rounded-3xl z-0"></div>
      <div className="absolute w-[300px] h-[300px] sm:w-[200px] sm:h-[200px] md:w-[650px] md:h-[650px] bg-[#FFE7BA] rotate-[60deg] top-[80%] left-[10%] sm:top-[50%] sm:left-[40%] md:top-[45%] md:left-[60%] rounded-3xl z-0"></div>

      {/* Text Section */}
      <div className="relative w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center z-10">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-900">Adoption 🐾</h1>
        <h2 className="text-lg md:text-2xl font-semibold mt-2 text-gray-700">We Need Help. So Do They.</h2>
        <p className="mt-4 text-gray-600">
        Adopt a pet and give it a home, it will be love you back unconditionally.
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="flex items-center bg-transparent border border-blue-900 text-blue-900 px-4 py-2 rounded-full">
            <FaPlay className="mr-2" /> 
            View Intro
          </button>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-full">Explore Now</button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full md:w-1/2 p-6 flex items-center justify-center z-10">
        <img
          src="/hand.png"
          alt="Woman holding a cat"
          className="rounded-full w-3/4 h-auto md:w-full"
        />
      </div>
    </div>
  );
}