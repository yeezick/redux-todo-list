import {createSlice} from "@reduxjs/toolkit" ;

const initialState = {
  name: "",
  email: "",
  zipCode: "",
  date:"",
  address:""
}

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateInput: (state, action) => {
      const {type, value} = action.payload;
      state[type] = value;
      console.log(state)
    },
  }
})

export const formActions = formSlice.actions;
export default formSlice