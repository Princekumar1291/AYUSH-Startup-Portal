import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import ApplicationForm from './pages/ApplicationForm/ApplicationForm'
import DocumentUpload from './pages/DocumentUpload/DocumentUpload'
import HelpCenter from './pages/FAQ/FAQ'
import Main from './pages/Main/Main'
import LoginPage from './pages/Login/Login'
import SignupPage from './pages/SignUp/SignUp'
import AboutPage from './pages/About/About'
import FAQ from './pages/FAQ/FAQ'
import Help  from './pages/Help/Help'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/help-center" element={<Help/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/application-form" element={<ApplicationForm />} />
        <Route path="/document-upload" element={<DocumentUpload />} />
        <Route path="/faq" element={<FAQ />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
      </Routes>
    </>
  )
}

export default App
