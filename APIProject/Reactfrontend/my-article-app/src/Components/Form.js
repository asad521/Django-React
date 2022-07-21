import React from 'react'
import {useState, useEffect} from 'react';
import Cookies from 'universal-cookie';

export const Form = (props) => {

  const cookies = new Cookies();


  const update= (e)=> {
    console.log(e.target)

  }
   const [title,setTitle] =useState([]);
   const [description,setDescription] = useState([])

   useEffect(()=>{},[])
 
   const id =props.word.id
   const updateRequest  = () => {
    fetch(`http://127.0.0.1:8000/api/articles/${id}/`,{
      'method': 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${cookies.get('mytoken')}`
      }, body:JSON.stringify({title,description})
    }).then(res => res.json()).then(res => props.updateInfo(res))
   

   }


   const postRequest  = () => {
    fetch(`http://127.0.0.1:8000/api/articles/`,{
      'method': 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${cookies.get('mytoken')}`
      }, body:JSON.stringify({title,description})
    }).then(res => res.json()).then(res => props.postRequest(res))
   

   }
  return (
    <div><h1>Edit the Form</h1>

    
     
    
    <h4>Title</h4>
    <p>{props.word.title}</p>
    <input placeholder='Enter the title' onChange={(e)=> setTitle(e.target.value)}></input>
    <h4>Description</h4>
    <textarea placeholder="Enter the post" onChange={(e)=> setDescription(e.target.value)}></textarea>
    <br></br>
    <button className='btn btn-success' onClick={updateRequest}>Update Post</button>
    <button className='btn btn-success' onClick={postRequest}>Post Article</button>

  
  
  </div>
  )
}

export default Form;
