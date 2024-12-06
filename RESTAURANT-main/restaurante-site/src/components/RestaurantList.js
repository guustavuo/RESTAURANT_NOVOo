import React from 'react';
import { Link } from 'react-router-dom'; // Link continua o mesmo
import '../styles/RestaurantList.css';  // Para RestaurantList

const RestaurantList = () => {
  const restaurants = [
    { id: 1, name: 'Restaurante A' },
    { id: 2, name: 'Restaurante B' },
    { id: 3, name: 'Restaurante C' },
  ];

  return (
    <div>
      <h2>Restaurantes</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Link to={`/restaurant/${restaurant.id}`}>{restaurant.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
