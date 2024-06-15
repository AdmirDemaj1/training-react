import { useState } from 'react';

export default function Login() {
    const [formValues, setFormValues]= useState({
        email: '',
        password: ''
    });
    const [didEdit, setDidEdit]= useState({
        email: false,
        password: false
    });
    const [didBlur, setDidBlur]= useState({
        email: false,
        password: false
    });
    // const [emailValue, setEmailValue]= useState('');
    // const [passwordValue, setPasswordValue]= useState('');

    // const emailIsEnvalid = didEdit.email && !formValues?.email.includes("@");
    // const passIsEnvalid = didEdit.password && formValues?.password.toString().length < 6;


    const emailIsEnvalid = didBlur.email && !formValues?.email.includes("@");
    const passIsEnvalid = didBlur.password && formValues?.password.toString().length < 6;


    console.log(passIsEnvalid)
    function handleSubmit(event) {
        event.preventDefault();
        console.log(formValues)
    }
    function handleFormReset(event) {
        event.preventDefault();
        setFormValues({ email: '',
            password: ''})
    }

     function handleInput(identifier,event) {
        // setDidEdit((prevValues) => ({
        //     ...prevValues,
        //     [identifier]: true
        // }))
        setDidBlur((prevValues) => ({
            ...prevValues,
            [identifier]: false
        }))
        setFormValues((prevValues) => ({
            ...prevValues,
            [identifier]: event.target.value
        }))
    }

    // function handleEmailChange(event) {
    //     setEmailValue(event.target.value)
    // }
    // function handlePasswordChange(event) {
    //     setPasswordValue(event.target.value)
    // }

    function handleInputBlur(identifier) {
        setDidBlur((prevValues) => ({
            ...prevValues,
            [identifier]: true
        }))
    }


 
  return (
    // <form>
      <form onSubmit={handleSubmit}>

      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            // onChange={handleInput}
            onChange={(event) => handleInput("email", event)}
       value={formValues.email}
          />
          <div className="control-error">{emailIsEnvalid && <p>Please enter a valid email</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onBlur={() => handleInputBlur("password")}
            name="password"
            onChange={(event) => handleInput("password", event)}
       value={formValues.password}
          />
           <div className="control-error">{passIsEnvalid && <p>Please enter a valid password</p>}</div>
        </div>
      </div>

      <p className="form-actions">
        <button type='button' className="button button-flat" onClick={handleFormReset}>Reset</button>
        <button  className="button" >
          Login
        </button>
      </p>
    </form>
  );
}