import React from 'react';
import '../styles/RestaurantPage.css';  // Para RestaurantPage

const RestaurantInfo = ({ restaurantId }) => {
  // Dados simulados de restaurante
  const restaurant = {
    1: { name: 'Restaurante A', description: 'Comida italiana autêntica.' },
    2: { name: 'Restaurante B', description: 'Sushi fresquinho e delicioso.' },
    3: { name: 'Restaurante C', description: 'Culinária brasileira tradicional.' },
  };

  return (
    <div>
      <h2>{restaurant[restaurantId].name}</h2>
      <p>{restaurant[restaurantId].description}</p>
    </div>
  );
};

export default RestaurantInfo;
