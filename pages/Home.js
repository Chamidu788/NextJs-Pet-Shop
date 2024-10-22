import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard'; 

const Home = () => {
    const [pets, setPets] = useState([]);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        const fetchPets = async () => {
            const response = await fetch('https://monitor-backend-rust.vercel.app/api/pets');
            const data = await response.json();
            setPets(data);
        };

        fetchPets();
    }, []);

    return (
        <div className="pets-container">
            {pets.length > 0 ? (
                pets.slice(0, showMore ? pets.length : 8).map((pet) => (
                    <div className="pet-card" key={pet.id}>
                        <ProductCard pet={pet} />
                    </div>
                ))
            ) : (
                <p>Loading pets...</p>
            )}
            <button onClick={() => setShowMore(!showMore)}>
                {showMore ? 'Show Less' : 'View More'}
            </button>
        </div>
    );
};

export default Home;
