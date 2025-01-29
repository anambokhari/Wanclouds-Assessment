
import { configureStore } from '@reduxjs/toolkit';

// Action Types
const ADD_FORM_DATA = 'ADD_FORM_DATA';
const DELETE_FORM_DATA = 'DELETE_FORM_DATA';

// Action Creators
export const addFormData = (formData) => ({
  type: ADD_FORM_DATA,
  payload: formData,
});

export const deleteFormData = (index) => ({
  type: DELETE_FORM_DATA,
  payload: index,
});

// Initial state for the store
const initialState = {
  formData: [],
};

// Reducer
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FORM_DATA:
      return {
        ...state,
        formData: [...state.formData, action.payload],
      };
    case DELETE_FORM_DATA:
      return {
        ...state,
        formData: state.formData.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};


const store = configureStore({
  reducer: formReducer, 
});

export default store;
