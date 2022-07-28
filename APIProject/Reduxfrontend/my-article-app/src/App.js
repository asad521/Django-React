import React, { useEffect } from 'react';
import { Login } from './features/counter/login';
import { ArticleForm } from './features/counter/ArticleForm';
import ArticlesUI from './features/counter/ArticlesUI';
import { useDispatch } from 'react-redux';
import { getArticles } from './features/apiCalls/api';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // getArticles(dispatch)
  }, []);
  return (
    
    <div className="App">

        {/* <Counter /> */}

        <ArticleForm></ArticleForm>
        <ArticlesUI></ArticlesUI>
    </div>
  );
}

export default App;
