import { loginStart, loginSuccess, loginError, addArticles, removeArticles,addAllArticles } from "../counter/counterSlice";
import { useSelector } from 'react-redux';
export const loginCall = async (args, dispatch) => {
  console.log('in login call')
  const username = args.email;
  const password = args.password;
  console.log(username + 'this is user data')
  dispatch(loginStart);

  try {
    console.log('in try')
    fetch('http://127.0.0.1:8000/auth/', {
      'method': 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, body: JSON.stringify({ username, password })
    }).then(res => res.json()).then(res => {
      console.log('this is resposne of loginCall=' + JSON.stringify(res))
      dispatch(loginSuccess(res))

      // cookies.set('mytoken', res.token)sdf
      // navigate('/articles/');

      // setToken(cookies.get('mytoken'))
      // console.log(token)
    })
  } catch (error) {
    console.log('this is error in loginCall =' + error)
    dispatch(loginError)

  }
}

export const articlePostRequest = async (args, dispatch) => {
  console.log('in addarticle request')
  const title = args.title;
  const description = args.description;
  try {
    fetch(`http://127.0.0.1:8000/api/articles/`, {
      'method': 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 381997a3f6f126820d3d11d9b55b49a1ea409972'
      }, body: JSON.stringify({ title, description })
    }).then(res => res.json()).then(res => {
      // console.log(JSON.stringify (res)+'this is post response')
      // const data = JSON.stringify (res);
      console.log(res +'response of post request')
      dispatch(addArticles(res))
    })

  } catch (error) {
    console.log(error + 'this is error of postRequest')
  }

}

export const articleDeleteRequest = async (id, dispatch) => {
  console.log(id)
  try {
    fetch(`http://127.0.0.1:8000/api/articles/${id}/`, {
      'method': 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 381997a3f6f126820d3d11d9b55b49a1ea409972'
      }
    }).then(res => res.json()) 
      .then(res => console.log(res))
        dispatch(removeArticles(id))



  } catch (error) {
    console.log(error);
  }



}

export const articleUpdateRequest = async ({title,description,dispatch,id}) => {
  console.log(id +'this is id we are changing')

  
  fetch(`http://127.0.0.1:8000/api/articles/${id}/`,{
    'method': 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token 381997a3f6f126820d3d11d9b55b49a1ea409972'
    }, body:JSON.stringify({title,description})
  }).then(res => res.json()).then(res => console.log(res))


}


export const getAllArticles = async (dispatch) => {

  try {
    const res =fetch('http://127.0.0.1:8000/api/articles/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 381997a3f6f126820d3d11d9b55b49a1ea409972'
      }
    }).then(res => res.json()).then(res => {
          
          dispatch(addAllArticles(res));
        
        
  })

  
 


  } catch (error) {
    console.log('error in get article request api')
  }
}

