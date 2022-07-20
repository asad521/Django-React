import React from 'react'

export const ArticleList = (props) => {



    return (
        <div>

            {props.articles && props.articles.map(article => {
                return (<div >
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <button className='btn btn-primary' onClick={()=>props.setWord(article)}>Update</button>
                    <button className='btn btn-danger'>Delete</button>
                </div>)



            })}
        </div>
    )
}

export default ArticleList;