import {createSlice} from "@reduxjs/toolkit" ;

const initialState = {
  name: "",
  email: "",
  zipCode: "",
  date:"",
  address:""
}

export const counterSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    
  }
})