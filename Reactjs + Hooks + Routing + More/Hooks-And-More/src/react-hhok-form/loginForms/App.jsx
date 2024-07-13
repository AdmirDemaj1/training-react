import { json, redirect } from 'react-router-dom';
import Auth from './components/Auth.jsx';
import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import Signup from './components/SignUp.jsx';
// import Login from './components/StateLogin.jsx';
// import Login from './components/StateLogin.jsx';
// import './index.css';
import './form.css';


function AuthenticationForm() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Auth />
      </main>
    </>
  );
}

export default AuthenticationForm;

export async function action({request}){
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  console.log("??????????????", request.url);
  const data = await request.formData();

  const userData = {
    email: data.get('email'),
    password: data.get('password')
  }

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  })

  console.log("response", response);



  if(response.status === 422 || response.status === 401){
    return response;
  }

  if(!response.ok){
    throw json({message: 'Could not authenticate user'}, {status: 500})
  }

  const resData = await response.json();
  const token = resData.token;

  console.log("token",token);

  localStorage.setItem("token", token)

  return redirect('/');


}