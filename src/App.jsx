import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Route, Routes,} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import HomePage from './components/HomePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= { <LoginForm title="Login Form" /> } />
        <Route path="/signup" element= { <SignupForm title="Signup Form" />} />
        <Route path="/forgotpassword" element= { <ForgotPassword title="Forgot Password" />} />
        <Route path="/resetpassword" element= { <ResetPassword  title="Reset Password"/>} />
        <Route path="/homepage" element= { <HomePage  />} />



      </Routes>
    
    </BrowserRouter>
      
     
    </div>
  )
}

export default App
