import { useRef, useState } from 'react';
import { Form, Link, useSearchParams, useActionData } from 'react-router-dom';

export default function Auth() {
  const [searchParams] = useSearchParams();
  const data = useActionData();
  const isLogin = searchParams.get('mode') === 'login';

  console.log("data", data)
//   const [isLogin, setIsLogin] = useState(true);

//   function switchAuthHandler() {
//     setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
//   }

  return (
    <Form method='post' className="sign-up-form">
      <h2 style={{ color: ' #d9e2f1' }}>{isLogin ? 'Log in' : 'Create a new user'}</h2>
      {data && data.errors && (
        <ul>
           
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      {data && data.message && <p>{data.message}</p>}
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        {/* <button onClick={switchAuthHandler} type="button" className="button">
          {isLogin ? 'Create new user' : 'Login'}
        </button> */}
        <Link
          to={`?mode=${isLogin ? 'signup' : 'login'}`}
          className="button"
          style={{ textDecoration: 'none' }}
        >
          {isLogin ? 'Create new user' : 'Login'}
        </Link>
        <button className="button">Save</button>
      </p>
    </Form>
  );
}
