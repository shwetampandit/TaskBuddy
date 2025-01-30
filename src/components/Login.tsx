import { useState } from "react";
import TaskIcon from "../assets/svg/task.svg";
import GoogleIcon from "../assets/png/GoogleIcon.png";
import BgImg from "../assets/png/circles_bg.png";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  // const signInWithGoogle = async () => {
  //   setAuthing(true);
  //   setPersistence(auth, browserSessionPersistence)
  //     .then(() => {
  //       console.log("Session persistence set to 'session only'");
  //     })
  //     .catch((error) => {
  //       console.error("Error setting session persistence:", error);
  //     });
  //   signInWithPopup(auth, new GoogleAuthProvider())
  //     .then((response) => {
  //       console.log(response.user.uid);
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setAuthing(false);
  //     });
  // };
  const signInWithGoogle = async () => {
    setAuthing(true);

    try {
      await setPersistence(auth, browserSessionPersistence);
      // console.log("Session persistence set to 'session only'");

      const response = await signInWithPopup(auth, new GoogleAuthProvider());
      // console.log(response.user.uid);

      navigate("/");
    } catch (error) {
      // console.error("Error during authentication:", error);
      setAuthing(false);
    }
  };

  return (
    <div className="w-full h-screen flex">
      {/* Right half of the screen - login form */}
      <div className="w-[40%] h-full flex flex-col p-20 justify-center">
        <div className="self-center">
        <div className="w-[70%] flex flex-col max-w-[450px] mx-auto justify-center"
        style={{}}
        >
          <div className="w-[85%] flex font-[700]">
            <img src={TaskIcon} alt="" />
            <span className="text-[1.625rem] text-[#7B1984] font-urbanist">
              TaskBuddy
            </span>
          </div>
          <div style={{paddingBottom: '2rem'}} className="w-[85%] text-[#000000] font-[500] text-[0.728rem] pb-4">
            Streamline your workflow and track progress effortlessly with our
            all-in-one task management app.
          </div>
          <button
            className="p-4 mt-4 bg-[#000000] text-[#FFFFFF] font-[700] text-center flex items-center justify-center cursor-pointer mt-7 text-[1.364rem] gap-[5%]"
            onClick={signInWithGoogle}
            disabled={authing}
          >
            <img src={GoogleIcon} alt="" className="h-[24px]" />
            Continue With Google
          </button>
        </div>
        </div>
      </div>
      {/* Left half of the screen - App Screenshot */}
      <div className="w-[60%] overflow-hidden">
        <img src={BgImg} alt="" className="max-w-full" />
      </div>
    </div>
  );
}

export default Login;
