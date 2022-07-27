import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArticleItemUI from './ArticleItemUI.js';
import { getArticles } from '../apiCalls/api.js';



export const ArticlesUI = () => {

  const articles = useSelector(state => state.counter.articles)
  // console.log(JSON.stringify(articles) + ' This is article state get using selector')
  return (
    <div>
      {articles.map(item => {
        return (
          <ArticleItemUI articles={item}></ArticleItemUI>
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
