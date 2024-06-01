import { FC } from 'react';
import { ITour as InterfaceTour } from '../../types/types.ts';
import { Preview } from './ui';
import { Constructor, ExamplesEquipment, FlagDescription, Question, Result } from '../index.ts';
import { useQuizStore } from '@/features/quiz';

interface ITour {
  tour: InterfaceTour;
}

export const Tour: FC<ITour> = ({ tour }) => {
  const { currentQuestion, currentTour, isStartedTour, startTour } = useQuizStore();

  if (currentQuestion > tour.questions.length - 1) {
    if (currentTour === 2) {
      return <FlagDescription />;
    }
    if (currentTour === 4) {
      return <ExamplesEquipment />;
    }
    return <Result questionsNumber={tour.questions.length} />;
  }

  if (isStartedTour) {
    if (currentTour === 7) return <Constructor tour={tour} />;
    return (
      <Question
        question={tour.questions[currentQuestion]}
        questionsNumber={tour.questions.length}
        subtitle={tour.subtitle}
      />
    );
  }

  return <Preview name={tour.name} onNext={startTour} />;
};
