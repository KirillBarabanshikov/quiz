import { useState } from 'react';
import { Button } from '@/shared/ui';
import { tours } from './data/data.ts';
import { Question, TourPreview } from './ui';

export const Quiz = () => {
  const [currentTour, setCurrentTour] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const showTourPreview = currentQuestion < 0;

  function next() {
    if (currentQuestion === tours[currentTour].questions.length - 1) {
      setCurrentTour(currentTour + 1);
      setCurrentQuestion(-1);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  return (
    <div>
      {showTourPreview ? (
        <TourPreview name={tours[currentTour].name} number={currentTour + 1} />
      ) : (
        <Question question={tours[currentTour].questions[currentQuestion]} />
      )}
      <Button text={showTourPreview ? 'Начать' : 'Далее'} onClick={next} />
    </div>
  );
};
