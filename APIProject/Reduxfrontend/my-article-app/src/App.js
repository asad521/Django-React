import React, { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import { Login } from './features/counter/login';
import { ArticleForm } from './features/counter/ArticleForm';
import ArticlesUI from './features/counter/ArticlesUI';
import { useDispatch } from 'react-redux';
import { getArticles } from './features/apiCalls/api';

function App() {

  const dispatch = useDispatch();
  getArticles(dispatch);


  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <Login></Login>
        <ArticleForm></ArticleForm>
        <ArticlesUI></ArticlesUI>
      </header>
    </div>
  );
}

export default App;
