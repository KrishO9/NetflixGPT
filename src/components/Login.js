import Header from "./Header";
import { useState , useRef } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { checkValidData } from "../utils/validate";
import {createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase';
import { addUser } from "../utils/UserSlice";
import { useDispatch } from "react-redux";
import { HOME_SCREEN_BG , USER_LOGO_URL} from "../utils/constants";


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errMessage, setErrMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
   const message = isSignIn ? checkValidData(email.current.value , password.current.value) : checkValidData(email.current.value , password.current.value , name.current.value);
   setErrMessage(message);

   if(message) return;

   if(!isSignIn){
    createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value , photoURL: {USER_LOGO_URL}
      }).then(() => {
        const { email, displayName, uid, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      }).catch((error) => {
        // An error occurred
        setErrMessage(error.code + " : " + error.message);
      });

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrMessage(errorCode + " : " + errorMessage);
      // ..
    });
  
   }
   else{
    signInWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMessage(errorCode + " : " + errorMessage);
  });
   }

  }

  return (
    <div>
      <Header />
      <div className="relative h-screen">
        <img
          className="absolute w-full h-full object-cover"
          src={HOME_SCREEN_BG}
          alt="bg"
        ></img>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 bg-black w-full max-w-md mx-auto text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 px-2">
          {isSignIn ? "Sign in" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="p-4 my-3 w-full bg-gray-700"
            type="text"
            placeholder="Name"
          />
        )}
        <input
        ref={email}
          className="p-4 my-3 w-full bg-gray-700"
          type="text"
          placeholder="E-mail"
        />
        <input
        ref={password}
          className="p-4 my-3 w-full bg-gray-700"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
        />
        <button
          type="button"
          className="absolute my-8 transform -translate-x-6"
          onClick={togglePasswordVisibility}
        >
          {!showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>

        <p className="text-red-600 font-bold p-1 m-2">{errMessage}</p>

        <button className="p-3 my-4 bg-red-600 w-full rounded" onClick={handleSubmit} >{isSignIn ? "Sign in" : "Sign up"}</button>
        <p className="py-4 my-4 cursor-pointer" onClick={handleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign up here"
            : "Already have an account? Sign in here"}
        </p>
      </form>
    </div>
  );
};

export default Login;
