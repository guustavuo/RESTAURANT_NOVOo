import React from 'react';

const Menu = ({ restaurantId }) => {
  // Dados simulados do cardápio
  const menus = {
    1: [
      { id: 1, name: 'Pizza Margherita', price: 'R$ 30,00' },
      { id: 2, name: 'Lasagna', price: 'R$ 40,00' },
    ],
    2: [
      { id: 1, name: 'Sushi', price: 'R$ 50,00' },
      { id: 2, name: 'Sashimi', price: 'R$ 60,00' },
    ],
    3: [
      { id: 1, name: 'Feijoada', price: 'R$ 45,00' },
      { id: 2, name: 'Moqueca', price: 'R$ 55,00' },
    ],
  };

  return (
    <div>
      <h3>Cardápio</h3>
      <ul>
        {menus[restaurantId].map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
