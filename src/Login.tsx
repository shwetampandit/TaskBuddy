import { useState } from "react";
import TaskIcon from './assets/svg/task.svg';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };
  return (
    <div className="w-full h-screen flex">
      {/* Left half of the screen - background styling */}
      <div className="bg-red-500 text-white p-4">Test Tailwind</div>
      {/* Right half of the screen - login form */}
      <div className="w-1/2 h-full bg-[#1a1a1a] flex flex-col p-20 justify-center">
        <div className="w-full flex flex-col max-w-[450px] mx-auto">
          <div>
            <img src={TaskIcon} alt="" />
            <span className="text-[1.625rem] text-[#7B1984] font-bold font-urbanist">TaskBuddy</span>
          </div>
          <div>Streamline your workflow and track progress effortlessly with our all-in-one task management app.</div>
          {/* Button to log in with Google */}
          <button
            className="w-full bg-black text-white font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer mt-7"
            onClick={signInWithGoogle}
            disabled={authing}
          >
            Log In With Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
