export default function ProductCard({ pet }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden p-4 flex flex-col h-full">
      {/* Optional chaining and fallback image */}
      <img
        className="w-full h-48 md:h-60 lg:h-64 rounded-xl object-cover"
        src={pet?.image || '/path/to/default-image.jpg'}
        alt={pet?.name || 'No name available'}
      />
      <div className="mt-2 flex-grow">
        <h3 className="text-md md:text-lg font-semibold text-black">{pet?.breed || 'Unknown'}</h3>
        <p className="text-xs md:text-base text-gray-500">Gender: {pet?.gender || 'Unknown'}</p>
        <p className="text-xs md:text-base text-gray-500">Age: {pet?.age || 'N/A'}</p>
        <p className="text-sm md:text-base text-gray-900 font-bold">{pet?.price ? `${pet.price}` : 'Price not available'}</p>
      </div>
    </div>
  );
}
