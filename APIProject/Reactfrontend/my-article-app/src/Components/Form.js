import React from 'react'
import {useState, useEffect} from 'react';
export const Form = (props) => {

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
        'Authorization': 'Token c178555e7759eff9f6627453efea86a69d5bdba7'
      }, body:JSON.stringify({title,description})
    }).then(res => res.json()).then(res => props.updateInfo(res))
   

   }
  return (
    <div><h1>Edit the Form</h1>

    
     
    
    <h4>Title</h4>
   { console.log(props)}
    <p>{props.word.title}</p>
    <input placeholder='Enter the title' onChange={(e)=> setTitle(e.target.value)}></input>
    <h4>Description</h4>
    <textarea placeholder="Enter the post" onChange={(e)=> setDescription(e.target.value)}></textarea>
    <br></br>
    <button className='btn btn-success' onClick={updateRequest}>Update Post</button>
  
  
  </div>
  )
}

export default Form;
