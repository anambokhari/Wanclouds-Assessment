// import { configureStore } from '@reduxjs/toolkit';


// const ADD_FORM_DATA = 'ADD_FORM_DATA';


// export const addFormData = (formData) => ({
//   type: ADD_FORM_DATA,
//   payload: formData,
// });


// const initialState = {
//   formData: [],
// };


// const formReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_FORM_DATA:
//       return {
//         ...state,
//         formData: [...state.formData, action.payload], 
//       };
//     default:
//       return state;
//   }
// };


// const store = configureStore({
//   reducer: formReducer,
// });

// export default store;

// redux/store.js
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
        formData: [...state.formData, action.payload], // Save each new record
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

// Configure store with Redux Toolkit
const store = configureStore({
  reducer: formReducer, // Using the formReducer to handle form data
});

export default store;
