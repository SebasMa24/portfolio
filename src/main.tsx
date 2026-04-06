import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './shared/i18n/config.ts'
import Header from './layouts/Header.tsx'
import Hero from './components/Hero.tsx'
import Footer from './layouts/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <div className='sticky'> 
      <Header />
    </div>
    
    <main className="min-h-screen">
        { 
          <Hero />
        }
    </main>
    <Footer />

  </StrictMode>,
)
