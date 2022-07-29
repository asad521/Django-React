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
    <div class="container align-items-center justify-content-left bg-light d-grid gap-2 col-12 mx-auto ">
      <h2 className='text-lg-center fs-1 '>Article App with Django & React</h2>
      <button type="button " class="btn btn-success  mx-auto btn btn-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Add Article
      </button>

      {/* <!-- Modal --> */}
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Write Article to Post</h5>
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
              <button type="button" class="btn btn-primary" onClick={addArticle} data-bs-dismiss="modal" >Click to Post</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  )

}
