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
  articles: null,
};

export const counterSlice = createSlice({

  name: 'counter',
  initialState,
  reducers: {
    
    addArticles: (state=initialState , action) => {
      console.log(typeof action.payload)
      console.log(typeof state.articles)
      // const clone = {...original}
       state.articles= [...state.articles,action.payload]
  
 
    },
    addAllArticles: (state, action) => {
      state.articles=action.payload
    },
    removeArticles: (state, action) => {
      console.log(typeof action.payload)
      const id = parseInt(action.payload);
      console.log(state.articles)
      const result = state.articles.filter(item => item.id !== id

      )
      console.log(result)
      state.articles = result
      

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

export const { removeArticles,  loginStart, loginSuccess, loginError, addArticles,addAllArticles } = counterSlice.actions;




export default counterSlice.reducer;
