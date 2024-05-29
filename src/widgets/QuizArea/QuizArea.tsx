import { Quiz, StartQuiz, useQuizStore } from '@/features/quiz';

export const QuizArea = () => {
  const { isStarted, start } = useQuizStore();

  return <>{isStarted ? <Quiz /> : <StartQuiz onStart={start} />}</>;
};
