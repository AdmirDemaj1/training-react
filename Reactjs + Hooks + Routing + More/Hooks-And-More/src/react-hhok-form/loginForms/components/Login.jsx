import { useRef, useState } from 'react';

export default function Login() {
    const [emailIsEnvalid, setEmailIsEnvalid] = useState();
  const email = useRef();
  const password = useRef();

  function handleSubmit(event){
    event.preventDefault();
    console.log(email)
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = enteredEmail.includes("@");

    if(!emailIsValid){
        setEmailIsEnvalid(true)
        return;
    }
    setEmailIsEnvalid(false);
//Reset the form after we make sure it passes the validation
    email.current.value = '';
    password.current.value = '';


    console.log("Inserting data in db calling an edpoint")

    console.log(enteredEmail,enteredPassword)
  }
  function handleFormReset(event){
    event.preventDefault();
    email.current.value = '';
    password.current.value = '';
  }
  return (
    // <form>
      <form >

      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">{emailIsEnvalid && <p>Writte a proper email.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleFormReset}>Reset</button>
        <button type="button" className="button" onClick={handleSubmit}>
          Login
        </button>
      </p>
    </form>
  );
}