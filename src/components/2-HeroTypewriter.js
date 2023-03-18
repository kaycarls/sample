import React, { useEffect, useState } from 'react';

const HeroTypewriter = ({ texts }) => {
  const [typing, setTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const TYPING_SPEED = 100; 
  const DELETING_SPEED = 100; 
  const PAUSE_TIME = 5000;
  useEffect(() => {
    const text = texts[textIndex];
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        const typedText = text.substring(0, i + 1);
        const cursorClass = (i + 1) % 2 === 0 ? 'cursor' : 'cursor hide';
        document.getElementById('typewriter-text').innerHTML = `${typedText}<span class="${cursorClass}">|</span>`;
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          const deletingInterval = setInterval(() => {
            if (i > 0) {
              const typedText = text.substring(0, i - 1);
              const cursorClass = (i - 1) % 2 === 0 ? 'cursor' : 'cursor hide';
              document.getElementById('typewriter-text').innerHTML = `${typedText}<span class="${cursorClass}">|</span>`;
              i--;
            } else {
              clearInterval(deletingInterval);
              if (textIndex === texts.length - 1) {
                setTextIndex(0);
              } else {
                setTextIndex(textIndex + 1);
              }
              setTyping(false);
            }
          }, DELETING_SPEED);
        }, PAUSE_TIME);
      }
    }, TYPING_SPEED);
  }, [typing, textIndex, texts]);

  return (
    <div className="hero-typewriter">
      <span id="typewriter-text" className="typewriter-text"></span>
    </div>
  );
};

export default HeroTypewriter;
