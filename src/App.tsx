import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import CaseStudy from './pages/CaseStudy'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work/:slug" element={<CaseStudy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
