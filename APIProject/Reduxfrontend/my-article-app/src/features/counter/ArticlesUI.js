import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArticleItemUI from './ArticleItemUI.js';
import { articlePostRequest, getArticles ,getAllArticles} from '../apiCalls/api.js';



export const ArticlesUI = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    getAllArticles(dispatch)
  },[] );
  const articles = useSelector(state => state.counter.articles)
  console.log(JSON.stringify(articles))


  
  return (


    <div>
      {console.log('inside div')}
      {articles === null || articles.length === 0 ? <h1>"There is no article"</h1>  :
        articles.map(article => {
          return (
            <ArticleItemUI articles={article}></ArticleItemUI>
          )
        })}

    </div>
  )
}

export default ArticlesUI


// [[{"id":147,"title":"Higher Order Components","description":"Higher order components or"}],
// [{"id":147,"title":"Higher Order Components","description":"Higher order components or"}]] This is article state get using selector/[[{"id":147,"title":"Higher Order Components","description":"Higher order components or"}]
// ,[{"id":147,"title":"Higher Order Components","description":"Higher order components or"}],
// {"res":{"id":757,"title":"add","description":"adddd"}}] This is article state get using selector
// const result =state.articles.map(item =>item.filter(a =>
//   a.id !== id

// )) 