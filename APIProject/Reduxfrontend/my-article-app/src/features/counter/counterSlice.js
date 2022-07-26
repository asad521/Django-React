import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  value: 0,
  status: 'idle',
  name:'',
  password:'',
  pending:false,
  error:false,
  token :null,
};
// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    loginStart :(state,action) =>{
      state.pending =true;

    },
    loginSuccess: (state,action) => {
      state.pending =false;
      state.token = action.payload;
    },
    loginError: (state,action) => {
     state.pending = false;
     state.error = true;
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.value += action.payload;
  //     });
  // },
});

export const { increment, decrement,loginStart,loginSuccess, loginError} = counterSlice.actions;
export const selectCount = (state) => state.counter.value;




export default counterSlice.reducer;
