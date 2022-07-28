import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { articleDeleteRequest } from '../apiCalls/api';

export const ArticleItemUI = (article) => {

    const dispatch = useDispatch();
    const [id, setID] = useState();
    const del = (id) => {
        articleDeleteRequest(id, dispatch)

    }
    return (
        <div>
                 <div key={article.articles.id}>
                        <h2>{article.articles.title}</h2>
                        <p>{article.articles.description}</p>
                        <button value={article.articles.id} onClick={e => del(e.target.value)}>Update</button>
                        <button value={article.articles.id} onClick={e => del(e.target.value)} >Delete</button>
                    </div>

        </div>
    )
}
export default ArticleItemUI;
