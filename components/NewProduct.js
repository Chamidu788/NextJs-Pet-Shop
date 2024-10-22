export default function NewProduct({ product }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden p-4">
      {/* Product image */}
      <img
        className="w-full h-48 md:h-60 lg:h-64 rounded-xl object-cover"
        src={product?.image || '/path/to/default-image.jpg'}
        alt={product?.name || 'No name available'}
      />
      <div className="mt-2">
        <h3 className="text-sm md:text-lg font-semibold text-black">{product?.name || 'Unknown'}</h3>
        
        {/* Display Product and Size on one line */}
        <p className="text-xs md:text-sm text-gray-500">
          Product: {product?.product || 'Unknown'} | Size: {product?.size || 'N/A'}
        </p>
        
        <p className="text-sm md:text-base text-gray-900 font-bold">{product?.price || 'Price not available'}</p>
        
        {/* Description with background and icon */}
        <div className="mt-2 p-2 bg-yellow-100 rounded-md flex items-center">
          <span className="mr-2 text-red-500">🎁</span>
          <p className="text-xs md:text-sm text-gray-500">{product?.description || 'No description available'}</p>
        </div>
      </div>
    </div>
  );
}
