import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { articlePostRequest } from '../apiCalls/api';


export const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch()
  const a = useSelector(state => state.counter.articles)


  const addArticle = (e) => {
    articlePostRequest({ title, description }, dispatch)
  }

  return (
    <div>

        <h2>Article</h2>
        
            <input onChange={e => setTitle(e.target.value)}></input>
            <h2>Description</h2>
            <input onChange={e => setDescription(e.target.value)}></input>
            <br></br>
            <button onClick = {addArticle}>Add Article</button>


    </div>

  )

}
