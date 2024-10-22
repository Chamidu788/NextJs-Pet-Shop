// components/CustomBanner.js
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
export default function CustomBanner() {
  return (
    <div className="relative w-full h-[550px] sm:h-[450px] md:h-[500px] bg-[#F7DBA7] overflow-hidden flex items-center justify-center rounded-3xl pt-12 md:pt-16 border-4 border-white">
      {/* Background Shapes */}
      <div className="absolute w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] bg-[#1e293b] rotate-[5deg] top-[68%] left-[25%] sm:top-[60%] sm:left-[60%] md:top-[57%] md:left-[58%] rounded-3xl"></div>
      <div className="absolute w-[350px] h-[350px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px] bg-[#f4d598] rotate-[55deg] top-[100%] left-[25%] sm:top-[60%] sm:left-[60%] md:top-[95%] md:left-[25%] rounded-3xl"></div>
      <div className="absolute w-[350px] h-[350px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px] bg-[#e2c07b] rotate-[35deg] top-[65%] left-[25%] sm:top-[60%] sm:left-[60%] md:top-[55%] md:left-[60%] rounded-3xl"></div>
      <div className="absolute w-[350px] h-[350px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px] bg-[#f9d58c] rotate-[12deg] md:rotate-[25deg] top-[-57%] left-[-20%] sm:top-[60%] sm:left-[60%] md:top-[-60%] md:left-[-10%] rounded-3xl"></div>
      
      {/* Banner Content */}
      <div className="relative z-10 flex flex-col items-center md:flex-row max-w-7xl mx-auto px-4">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-2 sm:space-y-4 text-center md:text-left mt-[20px] mb-[-40px] sm:mt-10 md:mt-0">
          <h1 className="text-[#083653] font-bold leading-tight">
            <span className="text-4xl sm:text-3xl md:text-6xl">One More Friend</span> <br />
            <span className="text-xl sm:text-2xl md:text-5xl">Thousands More Fun!</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#444]">
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
          </p>
          <div className="flex flex-row justify-center space-x-4 items-center md:justify-start"> 
          <button className="flex items-center bg-transparent border border-blue-900 text-blue-900 px-4 py-2 rounded-full">
            <FaPlay className="mr-2" />
              View Intro
            </button>
            <button className="px-4 py-2 h-12 bg-[#083653] text-white rounded-full hover:bg-[#061E45] transition">
              Explore Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-[400px] sm:h-[400px] md:h-[500px] flex items-end mt-[-60px] md:mt-0">
          <Image
            src="/dogman1.png"
            alt="Dog and owner"
            layout="fill"
            objectFit="contain"
            objectPosition="bottom"
            className="z-10"
          />
        </div>
      </div>
    </div>
  );
}