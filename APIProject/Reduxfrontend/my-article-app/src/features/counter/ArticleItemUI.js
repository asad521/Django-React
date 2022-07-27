import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { articleDeleteRequest } from '../apiCalls/api';

export const ArticleItemUI = (props) => {

    const dispatch = useDispatch();
    const [id, setID] = useState();
    const del = (id) => {
        articleDeleteRequest(id, dispatch)

    }
    return (
        <div>
            {props.articles.map(item => {
                return (
                    <div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                )
            })}

        </div>
    )
}
export default ArticleItemUI;
