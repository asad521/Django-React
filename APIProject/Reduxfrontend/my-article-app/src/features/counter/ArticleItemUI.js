import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { articleDeleteRequest ,articleUpdateRequest} from '../apiCalls/api';

export const ArticleItemUI = (article) => {

    const dispatch = useDispatch();
    const [id, setID] = useState();
    let [updateID, setUpdateID] = useState();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const del = (id) => {
        articleDeleteRequest(id, dispatch)

    }
    let result=5;
 
    const idfunction = (e) =>{
        console.log('id id function')
        console.log(e+'id id function')
        console.log(result+'actual value of result')
        result=e
        console.log(result+'update value  of result')
    }

    const updateArticle = () => {
        console.log(result+'this is result value')
        articleUpdateRequest({result,title,description,dispatch})

      }
 
    return (
        <div className="container">
            <div key={article.articles.id}>
                <div class="d-flex flex-column justify-content-center align-items-center  bg-light shadow p-2 m-3 bg-body rounded">
                    <h2>{article.articles.title}</h2>
                    <p>{article.articles.description}</p>
                    <div class="container d-flex flex-row-reverse" >
                    <button type="button " className="btn btn-danger" value={article.articles.id} onClick={e => del(e.target.value)} >Delete</button>

                    <button type="button "  value={article.articles.id} onClick={e => idfunction(e.target.value)}class="btn btn-info me-3" data-bs-toggle="modal"  data-bs-target="#update">
                    Update</button>
                    
                </div>
                </div>


            </div>

      

      {/* <!-- Modal --> */}
      <div class="modal fade" id="update" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Edit Article</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" >Title</label>
                <input type="h2" class="form-control" onChange={e => setTitle(e.target.value)} id="exampleFormControlInput1" placeholder="Here your Title" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Content</label>
                <textarea class="form-control" onChange={e => setDescription(e.target.value)} id="exampleFormControlTextarea1" rows="5"  placeholder="Write Something Special"></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary"    onClick={updateArticle} >Click to Post</button>
            </div>
          </div>
        </div>
      </div>

        </div>
    )
}
export default ArticleItemUI;
