import { tours } from './data/data';
import { useQuizStore } from './store/store';
import { FinishQuiz, Tour } from './ui';

export const Quiz = () => {
  const { currentTour } = useQuizStore();

  if (currentTour > tours.length - 1) {
    return <FinishQuiz />;
  }

  return <Tour tour={tours[currentTour]} />;
};
