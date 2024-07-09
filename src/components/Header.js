import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import {NETFLIX_LOGO_URL, USER_LOGO_URL ,DOWN_LOGO_URL, UP_LOGO_URL} from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, uid, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

   const handleSignOut = () => { 
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      navigate("/error");
      // An error happened.
    });
   };

  return (
    <div className="absolute px-6 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-52"
        src={NETFLIX_LOGO_URL}
        alt="logo"
      />
      { user && <div className="flex my-auto relative">
        <img
            className="w-4 h-4 my-7"
            src={user.photoURL}
            alt="up"
            onClick={toggleDropdown}
          ></img>
        <img
          className="h-9 w-9 my-4 mx-1 cursor-pointer"
          src={USER_LOGO_URL}
          alt="userlogo"
        />
        {showDropdown ? (
          <img
            className="w-4 h-4 my-7"
            src={DOWN_LOGO_URL}
            alt="down"
            onClick={toggleDropdown}
          ></img>
        ) : (
          <img
            className="w-4 h-4 my-7"
            src={UP_LOGO_URL}
            alt="up"
            onClick={toggleDropdown}
          ></img>
        )}
        {showDropdown && (
          <div className="absolute right-0 mt-16 w-48 bg-black rounded-md shadow-lg z-20">
            <ul className="py-1">
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-white">
                Account
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-white" onClick={handleSignOut}>
                Sign Out
              </li>
            </ul>
          </div>
        )}
      </div>}
    </div>
  );
};

export default Header;
