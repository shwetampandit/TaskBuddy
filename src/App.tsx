import { signOut, getAuth } from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

function App() {
  const auth = getAuth(); // Initialize Firebase Auth
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out the user
      console.log("User signed out successfully.");
      navigate("/login"); // Redirect to the login page
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <div>
      <button onClick={handleSignOut}>Signout</button>
      <h1>You're currently logged in.</h1>
    </div>
  )
}

export default App