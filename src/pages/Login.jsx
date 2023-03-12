import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Login() {
  const [signInWithGoogle, authUser, loading, error] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);

  if (error) {
    console.error(error);
  }

  if (user) {
    return <Navigate to="/" />;
  }

  if (loading) {
    return (<div className="main">
      <p>Loading...</p>
    </div>)
  }

  return (
    <div className="main">
      <h1 className="title">
        Welcome to <span className="text-lemon">baat chit </span> ✌️
      </h1>
      <p className="mb-2">Want to get started?</p>
      <button onClick={() => signInWithGoogle()} className="primary-button">
        Sign in with
        <img src="/google.svg" alt="Google" className="google-icon" />
      </button>
    </div>
  );
}
