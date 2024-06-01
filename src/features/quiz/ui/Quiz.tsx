import { useQuizStore } from '@/features/quiz';
import { tours } from '../data/data.ts';
import { Result, Tour } from '.';

export const Quiz = () => {
  const { currentTour } = useQuizStore();

  if (currentTour > tours.length - 1) {
    return <Result isLast={true} questionsNumber={40} />;
  }

  return <Tour tour={tours[currentTour]} />;
};
