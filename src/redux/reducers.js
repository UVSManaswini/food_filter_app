// src/redux/reducers.js
import { combineReducers } from 'redux';
import { SET_FILTER } from './actions';

const initialState = {
  foodItems: [
    { id: 1, name: 'Item 1', isFatFree: true, isVegan: true },
    { id: 2, name: 'Item 2', isFatFree: false, isVegan: true },
    // Add more food items here
  ],
  activeFilter: null, // Initially no filter is applied
};

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_FILTER:
        return { ...state, activeFilter: action.filter };
      default:
        return state;
    }
  };
  
  export default combineReducers({
    food: foodReducer,
  });
  