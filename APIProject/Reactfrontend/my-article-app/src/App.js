import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import ArticleList from './Components/ArticleList';
import Form  from './Components/Form';
import { useState, useEffect } from 'react';
function App() {
const [test, setTest] =useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/articles/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token c178555e7759eff9f6627453efea86a69d5bdba7'
      }
    }).then(res => res.json()).then(res => setArticles(res))
  }, [test])
  const [articles, setArticles] = useState([])
  const [word, setWord] =useState([])
  
  const updateInfo = (res) => {
    setTest(res)
  }

  return (
    <div className="App">
      React FrontEnd for Article Application
    <ArticleList articles={articles} setWord={word =>setWord(word)} ></ArticleList>
    <Form word={word} updateInfo={updateInfo}></Form>

    </div>
  );
}

export default App;