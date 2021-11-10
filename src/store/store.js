// built-in app-wide store, kind of like a central HQ to all states in the redux store
import { configureStore } from "@reduxjs/toolkit";
// counterReducer is what links this file to the counterSlice object's reducer property
import counterSlice from "../features/counter/counterSlice";
import formSlice from "../features/form/formSlice"

export const store = configureStore(
  {
    reducer: {
      // now we are adding the counter reducer to the statewide reducers
      counter: counterSlice.reducer,
      form: formSlice.reducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
