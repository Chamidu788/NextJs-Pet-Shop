const PetCards = () => {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src="/images/pomeranian.png" alt="Pomeranian Dog" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">What is a Pomeranian? How to Identify Pomeranian Dogs</h3>
                <p className="text-gray-600">The Pomeranian, also known as the Pomeranian, is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src="/images/dog-diet.png" alt="Dog Diet" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dog Diet You Need To Know</h3>
                <p className="text-gray-600">Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.</p>
              </div>
            </div>
  
            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src="/images/dog-behavior.png" alt="Dog Behavior" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively</h3>
                <p className="text-gray-600">Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PetCards;