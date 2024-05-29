import { FC } from 'react';
import { Button } from '@/shared/ui';
import { useQuizStore } from '@/features/quiz';

export const FinishQuiz: FC = () => {
  const { finish } = useQuizStore();

  return (
    <div>
      <Button text={'На главную'} onClick={finish} />
    </div>
  );
};
