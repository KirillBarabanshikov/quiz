import { Quiz, StartQuiz } from '@/features/quiz';
import { useState } from 'react';

export const QuizArea = () => {
  const [isStarted, setIsStarted] = useState(false);

  return <div>{isStarted ? <Quiz /> : <StartQuiz onStart={() => setIsStarted(true)} />}</div>;
};
