import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';

const NavBar = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <h2>Filter Options</h2>
      <button onClick={() => handleFilterChange(null)}>All</button>
      <button onClick={() => handleFilterChange('fat-free')}>Fat-Free</button>
      <button onClick={() => handleFilterChange('vegan')}>Vegan</button>
    </div>
  );
};

export default NavBar;