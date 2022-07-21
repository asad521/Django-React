import React from 'react'
import {useState, useEffect} from 'react';
import Cookies from 'universal-cookie';

export const ArticleList = (props) => {
    const cookies = new Cookies();
    const deleteRequest = (article) => {
        props.getID(article.id)
        fetch(`http://127.0.0.1:8000/api/articles/${article.id}/`,{
            'method': 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${cookies.get('mytoken')}`
            }
          })
    
    }

    return (
        <div>

            {props.articles && props.articles.map(article => {
                return (<div >
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <button className='btn btn-primary' onClick={()=>props.setWord(article)}>Update</button>
                    <button className='btn btn-danger' onClick={()=>deleteRequest(article)}>Delete</button>
                </div>)



            })}
        </div>
    )
}

export default ArticleList;