// components/ResponsiveBanner.js
import Image from 'next/image';

export default function ResponsiveBanner() {
  return (
    <div className="relative w-full h-screen bg-yellow-50 flex items-center justify-center">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Rectangle 1 */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-lg"></div>
        {/* Rectangle 2 */}
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-500 rounded-lg"></div>
        
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center p-4 md:flex-row md:text-left">
        {/* Text Section */}
        <div className="max-w-lg md:mr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">One More Friend</h1>
          <p className="text-lg md:text-xl mb-6">
            Thousands More Fun! Having a pet means you have more joy, a new
            friend, a happy person who will always be with you at home.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
              View Intro
            </button>
            <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-blue-600 rounded-lg">
              Explore Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-80 h-80 md:w-[400px] md:h-[400px]">
          <Image
            src="/images/man-with-dog.png" 
            alt="Man with dog"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}