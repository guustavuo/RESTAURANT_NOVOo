import React from 'react';
import { useParams } from 'react-router-dom'; // Esta importação permanece a mesma

const RestaurantPage = () => {
  const { id } = useParams(); // Usando useParams como antes

  return (
    <div>
      <h2>Informações do Restaurante {id}</h2>
      {/* Aqui você pode buscar e exibir os detalhes do restaurante com base no id */}
    </div>
  );
};

export default RestaurantPage;
