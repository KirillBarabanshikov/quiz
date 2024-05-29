import { FC, useEffect, useState } from 'react';
import { ITour as InterfaceTour } from '../../types/types.ts';
import { Button } from '@/shared/ui';
import { Question } from '../Question/Question.tsx';
import { useQuizStore } from '@/features/quiz/Quiz/store/store.ts';

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

  return (
    <div>
      {tour.name}
      <div>
        <Button text={'Начать'} onClick={() => setIsStarted(true)} />
      </div>
    </div>
  );
};
