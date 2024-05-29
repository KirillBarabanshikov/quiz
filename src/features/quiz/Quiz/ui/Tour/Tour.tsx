import { FC, useEffect, useState } from 'react';
import { ITour as InterfaceTour } from '../../types/types.ts';
import { Question } from '../Question/Question.tsx';
import { useQuizStore } from '@/features/quiz/Quiz/store/store.ts';
import { TourPreview } from '@/features/quiz/Quiz/ui';

interface ITour {
  tour: InterfaceTour;
}

export const Tour: FC<ITour> = ({ tour }) => {
  const { currentQuestion, setQuestion } = useQuizStore();
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    setIsStarted(false);
  }, [tour]);

  useEffect(() => {
    setQuestion(0);
  }, [isStarted]);

  if (isStarted) {
    return (
      <Question question={tour.questions[currentQuestion]} questionsCount={tour.questions.length} />
    );
  }

  return <TourPreview name={tour.name} onStart={() => setIsStarted(true)} />;
};
