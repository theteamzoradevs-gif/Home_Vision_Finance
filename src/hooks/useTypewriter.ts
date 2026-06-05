"use client";

import { useEffect, useState } from "react";

export function useTypewriter(words: string[], typingSpeed = 100) {
  const [index, setIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(typingSpeed);

  useEffect(() => {
    const fullWord = words[index];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = fullWord.substring(0, currentWord.length + 1);
        setCurrentWord(next);
        setSpeed(100);

        if (next === fullWord) {
          setSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        const next = fullWord.substring(0, currentWord.length - 1);
        setCurrentWord(next);
        setSpeed(50);

        if (next === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
          setSpeed(300);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, index, speed, words]);

  return currentWord;
}
