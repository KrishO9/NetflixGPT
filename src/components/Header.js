import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import {
  NETFLIX_LOGO_URL,
  USER_LOGO_URL,
  DOWN_LOGO_URL,
  UP_LOGO_URL,
  SUPPORTED_LANGUAGES,
} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/LanguageSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.gptSearchView);

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
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };
  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-6 py-2 bg-gradient-to-b from-black z-30 w-screen flex justify-between ">
      <img className="w-52" src={NETFLIX_LOGO_URL} alt="logo" />
      {user && (
        <div className="flex my-auto relative">
          {showGptSearch && (
            <select
              className="p-1 bg-gray-900 text-white m-4"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map(
                (language) =>
                  language && (
                    <option
                      key={language.identifier}
                      value={language.identifier}
                    >
                      {language.name}
                    </option>
                  )
              )}
            </select>
          )}
          <button
            className="mx-5 my-4 py-2 px-4 bg-blue-800 text-white rounded-lg"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Close" : "Ask AI"}
          </button>
          <img
            className="h-7 w-7 my-4 mx-3 cursor-pointer"
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
            <div className="absolute right-0 mt-16 w-48 bg-white rounded-md shadow-lg z-20">
              <ul className="py-1">
                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-black">
                  Account
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-black"
                  onClick={handleSignOut}
                >
                  Sign Out
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
