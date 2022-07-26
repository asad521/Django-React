import { createSlice } from '@reduxjs/toolkit'

// user slice
export const userSlice = createSlice({
  name:"user",
  initialState : {
    name : "Asad",
    email: "asadyahoo.com"
  }, 
  reducers : {
    update : ( state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    }
  }
})



// Action creators are generated for each case reducer function
export const { update } = userSlice.actions

export default userSlice.reducer