// src/components/FoodList.js
import React from 'react';
import { useSelector } from 'react-redux';

const FoodList = () => {
  const { foodItems, activeFilter } = useSelector((state) => state.food);

  const filteredFood = foodItems.filter((food) => {
    if (activeFilter === 'fat-free') {
      return food.isFatFree;
    }
    if (activeFilter === 'vegan') {
      return food.isVegan;
    }
    return true; // No filter applied
  });

  return (
    <div>
      <h2>Food List</h2>
      <ul>
        {filteredFood.map((food) => (
          <li key={food.id}>{food.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;


