import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import ApplicationForm from './pages/ApplicationForm/ApplicationForm'
import DocumentUpload from './pages/DocumentUpload/DocumentUpload'
import HelpCenter from './pages/FAQ/FAQ'
import Main from './pages/Main/Main'


function App() {
  return (
    <>
      <Routes>
        <Route path="/user" element={<Home />} />
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/application-form" element={<ApplicationForm />} />
        <Route path="/document-upload" element={<DocumentUpload />} />
        <Route path="/faq" element={<HelpCenter />} />
      
      </Routes>
    </>
  )
}

export default App
