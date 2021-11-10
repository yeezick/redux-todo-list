// import createSlice api built in to redux toolkit
import { createSlice } from "@reduxjs/toolkit";

// simply an object representing the intial state we intend for this particular "slice" in state
const initialState = {
  value: 0,
}

// now we're actually creating the state object which contains properties like it's name and initial state
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // the reducers property is how we actually interact with the slice, it should contain all methods that will affect the state of the "slice"
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const {increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer