import { FaPlay } from 'react-icons/fa';

export default function NewBanner() {
  return (
    <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-start px-10 h-auto md:h-[300px] bg-[#003459] overflow-hidden rounded-3xl border-4 border-white">
      {/* Background Rectangles */}
      <div className="absolute w-[700px] h-[700px] sm:w-[200px] sm:h-[200px] md:w-[1500px] md:h-[1500px] bg-[#003459] top-[-5%] left-[-5%] sm:top-[0%] sm:left-[0%] md:top-[0%] md:left-[0%] rounded-3xl z-0"></div>
      <div className="absolute w-[450px] h-[450px] sm:w-[250px] sm:h-[250px] md:w-[700px] md:h-[680px] bg-[#FCEED5] rotate-[15deg] md:rotate-[55deg] top-[-40%] left-[-10%] sm:top-[50%] sm:left-[50%] md:top-[-48%] md:left-[51%] rounded-3xl z-0"></div>
      <div className="absolute w-[300px] h-[300px] sm:w-[200px] sm:h-[200px] md:w-[650px] md:h-[650px] bg-[#002A48] rotate-[30deg] top-[80%] left-[10%] sm:top-[50%] sm:left-[40%] md:top-[60%] md:left-[-9%] rounded-3xl z-0"></div>

      
      {/* Text Section (Desktop Right) */}
<div className="relative w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-end z-10 order-1 md:order-2">
  <h1 className="text-2xl md:text-4xl font-bold text-blue-900">One More Friend</h1>
  <h2 className="text-lg md:text-2xl font-semibold mt-2 text-gray-700">Thousands More Fun!</h2>
  <p className="mt-4 text-sm md:text-md text-gray-600">
    Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
  </p>
  <div className="mt-6 flex space-x-4">
    <button className="flex items-center bg-transparent border border-blue-900 text-blue-900 px-4 py-2 rounded-full">
      <FaPlay className="mr-2" /> 
      View More
    </button>
    <button className="bg-blue-900 text-white px-4 py-2 rounded-full">Get Started</button>
  </div>
</div>

      {/* Image Section (Desktop Left) */}
      <div className="relative w-full md:w-1/2  p-0 flex items-center justify-center z-10 order-2 md:order-1">
        <img
          src="/dog-girl.png" 
          alt="New Banner"
          className="rounded-full w-3/4 h-auto md:w-full"
        />
      </div>
    </div>
  );
}