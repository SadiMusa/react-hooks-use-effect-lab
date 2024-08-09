
import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);


  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining((timeRemaining) => timeRemaining - 1);
    }, 1000);

    if (timeRemaining === 0) {
      onAnswered(false);
    }

    return () => clearTimeout(timer);
  }, [timeRemaining, onAnswered]); // Added onAnswered as a dependency

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
@@ -19,7 +29,7 @@ function Question({ question, onAnswered }) {
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
         
          <button key={index} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
