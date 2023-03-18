import { useEffect } from 'react';
import './App.css';
import Navbar from './components/1-Navbar';
import Hero from './components/2-Hero';
import Title from './components/3-Title';
import Projects from './components/4-Projects';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Title />
      <Projects />
    </div>
  );
}

export default App;
