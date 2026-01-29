import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBubble from './components/ChatBubble';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Courses />
      <Contact />
      <Footer />
      <ChatBubble />
    </div>
  );
}

export default App;
