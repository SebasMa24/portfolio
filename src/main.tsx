import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './shared/i18n/config.ts'
import Header from './layouts/Header.tsx'
import Hero from './components/Hero.tsx'
import Footer from './layouts/Footer.tsx'
import Contact from './components/Contact.tsx'
import Education from './components/Education.tsx'
import Projects from './components/Projects.tsx'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <div> 
      <Header />
    </div>
    
    <main className="min-h-screen">
        { 
          <><Hero /><Education /><Projects /><Contact /></>
        }
    </main>
    <Footer />

  </StrictMode>,
)
