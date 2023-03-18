import React, { useEffect } from 'react';
import HeroTypewriter from './2-HeroTypewriter';

const Hero = () => {
  useEffect(() => {
    const hero = document.getElementById('hero');
    hero.classList.add('visible');
  }, []);

  return (
    <div id="hero" className="fade-in container d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col-xl-12 bd">
          <h1>BACKEND <br /></h1>
          <HeroTypewriter texts={[' DEVELOPER', ' ENGINEER']} />
          <hr />
        </div>
        <div className="col-xl-12 bd">
          <p>Awangku Mohammad Syafiq Bin Pengiran Daud</p>
          <p>
            Aspiring Backend Developer with a strong foundation in programming languages.<br />
            Highly motivated and committed to delivering high-quality code. <br />
            Eager to learn and grow in a collaborative work environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;