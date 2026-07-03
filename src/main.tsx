import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./shared/i18n/config.ts";
import Header from "./layouts/Header.tsx";
import Hero from "./components/Hero.tsx";
import Footer from "./layouts/Footer.tsx";
import Contact from "./components/Contact.tsx";
import Education from "./components/Education.tsx";
import Projects from "./components/Projects.tsx";
import SectionDivider from "./components/SectionDivider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <main>
      <Hero />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Contact />
    </main>
    <Footer />
  </StrictMode>
);
