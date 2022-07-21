import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import ArticleList from './Components/ArticleList';
import Form  from './Components/Form';
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';


function App() {
const [test, setTest] =useState([])
const [id,getID] =useState([0])
const cookies = new Cookies();


useEffect(() => {
    fetch('http://127.0.0.1:8000/api/articles/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${cookies.get('mytoken')}`
      }
    }).then(res => res.json()).then(res => setArticles(res))
  }, [test,id])




  const [articles, setArticles] = useState([])
  const [word, setWord] =useState([])
  const updateInfo = (res) => {
    setTest(res)
  }

  const postRequest = (res) => {
    setTest(res)
  }

  return (
    // <CookiesProivder>
    <div className="App">
      React FrontEnd for Article Application
    <ArticleList articles={articles} setWord={word =>setWord(word) }  getID={id=>getID(id)}  ></ArticleList>
    <Form word={word} updateInfo={updateInfo} postRequest={postRequest}  ></Form>

    </div>
    // </CookiesProivder>
  );
}

export default App;