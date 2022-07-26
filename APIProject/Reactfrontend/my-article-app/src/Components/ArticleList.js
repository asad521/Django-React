import React from 'react'
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

export const ArticleList = (props) => {
    const cookies = new Cookies();
    const deleteRequest = (article) => {
        props.getID(article.id)
        fetch(`http://127.0.0.1:8000/api/articles/${article.id}/`, {
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
                return (
                    <div className="align-items-center justify-content-left bg-light ">
                        <div className='border m-3 '>
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                        </div>
                        <div className="d-flex flex-row-reverse ">
                            <button className='btn btn-primary ms-2' onClick={() => props.setWord(article)}>Update</button>
                        {/* <!-- Update Button trigger modal --> */}
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#update" onClick={() => props.setWord(article)} >
                            Launch demo modal
                        </button>
                            {/* <button className='btn btn-danger ' onClick={() => deleteRequest(article)}>Delete</button> */}
                            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Delete                    </button>
                        </div>
                        {/* model for delete */}
                        {/* <!-- Modal --> */}
                        <div class="modal fade   " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" >
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Are you sure you want to delete the article?</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        This action cannot be reveresed.
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => deleteRequest(article)}>Delete & Close</button>
                                        {/* <button type="button" class="btn btn-primary">Understood</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                     

                        {/* <!-- UpdateModal --> */}
                        <div class="modal fade" id="update" tabindex="-1" >
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="updateLabel">Modal title</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" >Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>)


            })}
        </div>
    )
}

export default ArticleList;