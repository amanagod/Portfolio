import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ProjectPage from './pages/ProjectsPage.jsx'
function App() {

  return (
    <>
<BrowserRouter>
<Routes>

  <Route path='/' element={<LandingPage />} />
  <Route path='/about' element={<AboutPage />} />
  <Route path='/contact' element={<ContactPage />} />
  <Route path='/project' element={<ProjectPage />} />





</Routes>
</BrowserRouter>

    </>
  )
}

export default App
