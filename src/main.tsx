import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Login from './components/Login.tsx'
import AuthRoute from './AuthRoute.tsx'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBlD7ikZkAyfot-3wDB7xi4_E6m_hgveEE",
  authDomain: "taskbuddyauth.firebaseapp.com",
  projectId: "taskbuddyauth",
  storageBucket: "taskbuddyauth.firebasestorage.app",
  messagingSenderId: "643508966838",
  appId: "1:643508966838:web:11851fdbc4f8cde009dd17"
};
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<AuthRoute><App /></AuthRoute>} />
        <Route path="*" element={<Navigate to="/" />} />
         <Route path="/login" element={<Login />} />
        {/*<Route path="/" element={<App />} /> */}
      </Routes>
    </Router>
  </StrictMode>,
)
