import React, { useState, useEffect } from 'react';

const Landing = () => {
  const words = ["Hello", "World", "Landing", "Animation"];
  const speed = 100; // typing speed in milliseconds
  const delay = 2000; // delay between words in milliseconds

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let currentIndex = isDeleting ? text.length : 0;
    let interval;

    const type = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setText((prevText) => prevText.substring(0, currentIndex - 1));
      } else {
        setText((prevText) => currentWord.substring(0, currentIndex + 1));
      }

      if (!isDeleting && text === currentWord) {
        setIsDeleting(true);
        clearInterval(interval);
        setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, delay);
      } else if (isDeleting && text === '') {
        clearInterval(interval);
      }

      currentIndex = isDeleting ? currentIndex - 1 : currentIndex + 1;
    };

    interval = setInterval(type, speed);

    return () => clearInterval(interval);
  }, [text, isDeleting, wordIndex]);

  return <div>{text}</div>;
};

export default Landing;
