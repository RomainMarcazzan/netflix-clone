import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => console.log(authUser))
      .catch((error) => console.log(error.message));
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => console.log(authUser))
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="email" type="email" />
        <input ref={passwordRef} placeholder="password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signUpScreen__gray">New to Netflix ? </span>
          <span className="signUpScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
