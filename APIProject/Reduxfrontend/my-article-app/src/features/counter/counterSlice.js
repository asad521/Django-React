import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';
import { useSelector } from 'react-redux';

const initialState = {
  value: 0,
  status: 'idle',
  name: '',
  password: '',
  pending: false,
  error: false,
  token: [],
  articles: [],
};

export const counterSlice = createSlice({
  
  name: 'counter',
  initialState,
  reducers: {
    addArticles: (state, action) => {
      state.articles.push(action.payload)

    },
    removeArticles: (state, action) => {
      console.log(typeof action.payload)
      const id  = parseInt(action.payload); 
      const articles = state.articles.filter(articleItem => articleItem.id !== id)
      state.articles = articles

      

      // const df = existingUsers.filter(a => a.id !== id);
      // console.log(df)
      // state.articles= df;
      

      // const a =state.articles.filter(article => article.id !== action.payload)
      // console.log(a)
    //   return {
    //     articles: state.articles.filter(a => {
    //       a.id > 395
    //     })

    // }

    },

    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    loginStart: (state, action) => {
      state.pending = true;

    },
    loginSuccess: (state, action) => {
      state.pending = false;
      state.token = action.payload;
    },
    loginError: (state, action) => {
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

export const { removeArticles, increment, decrement, loginStart, loginSuccess, loginError, addArticles } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;




export default counterSlice.reducer;
