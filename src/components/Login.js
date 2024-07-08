import Header from "./Header";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Header />
      <div className="relative h-screen">
        <img
          className="absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg"
          alt="bg"
        ></img>
      </div>
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 bg-black w-full max-w-md mx-auto text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 px-2">
          {isSignIn ? "Sign in" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            className="p-4 my-3 w-full bg-gray-700"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          className="p-4 my-3 w-full bg-gray-700"
          type="text"
          placeholder="E-mail"
        />
        <input
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

        <button className="p-3 my-4 bg-red-600 w-full rounded">{isSignIn ? "Sign in" : "Sign up"}</button>
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
